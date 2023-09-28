import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import './styles.scss';

const schema = z.object({
  name: z.string().min(3, { message: 'Por favor insira um nome válido' }),
  email: z
    .string()
    .min(1, { message: 'Insira um email' })
    .email({ message: 'Insira um email válido' }),
  phone: z
    .string()
    .min(14, { message: 'Telefone inválido' })
    .max(15, { message: 'Telefone inválido' }),
});

type FormDataProps = z.infer<typeof schema>;

export function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} id="wpp-form">
      <div className="campo">
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <span className="form-control-wrap">
          <input type="text" {...register('name')} placeholder="Name" />
          {errors.name?.message && <span>{errors.name?.message}</span>}
        </span>
      </div>
      <div className="campo">
        <label htmlFor="phone" className="hidden">
          Phone
        </label>
        <span className="form-control-wrap">
          <input
            type="text"
            {...register('phone')}
            id="telefone"
            placeholder="Phone"
          />
          {errors.phone?.message && <span>{errors.phone?.message}</span>}
        </span>
      </div>
      <div className="campo">
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <span className="form-control-wrap">
          <input type="email" {...register('email')} placeholder="Email" />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </span>
      </div>
      <div className="btn whatsapp">
        <button type="submit">
          Iniciar conversa
          <i className="material-symbols-sharp">send</i>
        </button>
      </div>
      <div className="response-output"></div>
    </form>
  );
}
