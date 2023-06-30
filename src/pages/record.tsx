import { useNavigate } from 'react-router-dom';

function Record() {
  const router = useNavigate();

  function toDetail() {
    router('/home');
  }
  return (
    <>
      Record
      <button onClick={toDetail}>去 home</button>
    </>
  );
}

export default Record;
