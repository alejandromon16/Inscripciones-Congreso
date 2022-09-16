import {
	IsInt,
	Length,
	IsEmail,
	Min,
	Max,
} from 'class-validator';

type Rol = 'PASTOR PRINCIPAL' | 'PASTOR ASOCIADO' | 'LIDER' | 'MIEMBRO';
  
export class personData {
	@Length(1, 25)
	name: string;

	@Length(1,25)
	lastname: string;

	@Length(5,10)
	id: string;

	@IsEmail()
	email: string;

	@Length(6,15)
	phone: string;

	@Length(1,20)
	church: string;

	rol: Rol
}
