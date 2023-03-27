
import Card from '../../Components/Card/Card';
import './MainPage.css';
import { poems } from '../../Components/poems'

function MainPage() {
  return (
    <div>
    {poems.map((poem) => (
        <Card  title = {poem.title} url = {poem.url} />     
    ))}
      
    </div>
  );
}

export default MainPage;