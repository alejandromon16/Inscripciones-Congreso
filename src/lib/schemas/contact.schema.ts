import * as zod from 'zod';

export const contactSchema = zod.object({
	name: zod.string().min(1, 'Ingrese su nombre'),
	lastname: zod.string().min(1, 'Ingrese su apellido'),
	email: zod
		.string()
		.email('Ingrese un correo valido ejemplo@gmail.com')
		.min(1, 'Ingrese su correo'),
	id: zod.string().min(1, 'Ingrese su cedula ID'),
	phone: zod.string().min(1, 'Ingrese su numero de telefono'),
	church: zod.string().min(1, 'Ingrese el nombre de la congregacion'),
	rol: zod.string().min(1, 'Ingrese el rol en la congregacion'),
	department: zod.string().min(1, 'Ingrese el departamento').optional().or(zod.literal('')),
	country: zod.string().min(1,"Ingrese el pais.").optional().or(zod.literal('')),
});

export type ContactSchema = zod.infer<typeof contactSchema>;
