
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
}
