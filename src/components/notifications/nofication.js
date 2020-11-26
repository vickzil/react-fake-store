import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';

toast.configure();

const customId = "custom-id-yes";
export const noficationMessage =(message) => {
  return toast.success(message, { position: toast.POSITION.TOP_RIGHT, autoClose: 2000,  toastId: customId});
}