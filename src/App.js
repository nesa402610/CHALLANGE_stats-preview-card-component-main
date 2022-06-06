import './App.css';
import imageD from './images/image-header-desktop.jpg';
import imageM from './images/image-header-mobile.jpg';

function App() {
    const stats = [
        {heading: '10k+', body: 'companies'},
        {heading: '314', body: 'templates'},
        {heading: '12M+', body: 'queries'},
    ];
    return (
        <div className="container">
            <div className={'content'}>
                <div className={'infoBlock'}>
                    <div className={'mainInfo'}>
                        <h1>Get <span>insight</span> that help your business grow.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dicta dolores
                           exercitationem facere necessitatibus quas reiciendis sapiente soluta totam voluptates! Cumque
                           explicabo facilis molestiae neque optio recusandae reprehenderit unde vitae?</p>
                    </div>
                    <div className={'statsBlock'}>
                        {stats.map(stat =>
                            <div className={'statsItem'}>
                                <div className={'statsItem__head'}>
                                    {stat.heading}
                                </div>
                                <div className={'statsItem__body'}>
                                    {stat.body}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={'imageBlock'} style={{backgroundImage: `url(${imageD})`}}>
                    <img src={imageD} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default App;
