import { useNavigate } from 'react-router-dom';
import Panel from '../components/Panel.jsx';
import AlbumForm from '../components/AlbumForm.jsx';
import { useOpeth } from '../context/OpethContext';
import Menu from '../components/Menu.jsx';

function NewSong() {
  const { addOpeth } = useOpeth();
  const navigate = useNavigate();

  function handleSave(values) {
    const newAlbum = {
      id: String(Date.now()),
      ...values,
    };

    addOpeth(newAlbum);
    navigate('/lista');
  }

  return (
    <>
      <Menu />
      <Panel
        id="new-album"
        title="New Album"
        className="md:col-span-2 xl:row-span-3"
      >
        <AlbumForm onSave={handleSave} />
      </Panel>
    </>
  );
}

export default NewSong;
