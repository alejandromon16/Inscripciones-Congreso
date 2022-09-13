import * as zod from 'zod';

export const contactSchema = zod.object({
	name: zod.string().min(1, 'Ingrese su nombre'),
	lastname: zod.string().min(1,'Ingrese su apellido'),
	email: zod
		.string()
		.email('Ingrese un correo valido ejemplo@gmail.com')
		.min(1, 'Ingrese su correo'),
	phone: zod.string().min(1, 'Ingrese su telefono')
});
export type ContactSchema = zod.infer<typeof contactSchema>;
