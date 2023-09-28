export const phoneMask = (phone: string) => {
  if (!phone) return;

  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/(\d{2})(\d)/, '($1) $2');
  phone = phone.replace(/(\d)(\d{4})$/, '$1-$2');
  console.log(phone);
  return phone;
};
