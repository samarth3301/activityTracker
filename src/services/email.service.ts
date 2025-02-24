import nodemailer, { Transporter } from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import logger from "../config/logger";
import { EmailInterface } from "../@types/interface";

class MailService {
	private transporter: Transporter;

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_USER_PASSWORD,
			},
		} as SMTPTransport.Options);
		this.transporter
			.verify()
			.then(() => logger.info("[ EMAIL ] connected to service."))
			.catch((error: any) => logger.error(`[ EMAIL ] Service : ${error}`));
	}

	public async sendEmail(options: EmailInterface): Promise<void> {
		const mailOptions = {
			from: process.env.SMTP_USER,
			to: options.to,
			subject: options.subject,
			text: options.text,
			html: options.html,
		};

		try {
			await this.transporter.sendMail(mailOptions);
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
}

const mailService = new MailService();

export default mailService;
