import './App.css';
import './index.css';


function App() {
  return (
    <div className="Container">
      <div className='firstpage'>
        <nav className='header' id='myHeader'>
          <ul>
            <img alt="yo" src='https://ky-2020.netlify.app/img/ky1.png'></img>
            <li className='one'><a href='#two'>Why CA</a></li>
            <li className='two'><a href='/b'>Duties</a></li>
            <li className='three'><a href='#three'>Benefits</a></li>
            <li className='four'><a href='#five'>Contacts</a></li>
            <li className='five'><a href='/e'>Login</a></li>
          </ul>
        </nav>

        
        <div className='heading'>
        <h1>KASHIYATRA 2K23</h1>
        </div>

        <div className='section'>
        <div id='box1'>
          <div className='num' data-target='350'>350</div>
          <p className='plus'>+</p>
          <p className='para'>colleges</p>
        </div>
        <div id='box2'>
          <div className='num' data-target='60000'>60000</div>
          <p className='plus'>+</p>
          <p className='para'>people</p>
        </div>
        <div id='box3'>
          <div className='num' data-target='60'>60</div>
          <p className='plus'>+</p>
          <p className='para'>events</p>
        </div>
        </div>
        </div>


        <div className='secondpage' id='two'>
           <h1 className='headingtwo'>
            <span>Why</span> <span>become</span> <span>a</span> <span>Campus</span> <span>Ambassador ?</span>
            </h1>
           <p className='whycainfo'>For bringing together a fest which encircles diversity like never before we are reaching out to colleges across the country.
           
              The selected Campus Ambassador in his/her tenure will represent <br></br>
           </p>
           <p className='part'>Kashiyatra,
               IIT(BHU) in his/her college and will becomean integral member of the team.</p>

           <ul class="lead2">
             <li className='points'>Become a Leader</li>
             <li className='points'>Update your organisational skills</li>
             <li className='points'>Polish your communicating &amp; public speaking skills. </li>
             <li className='points'>Get the exposure to online and media marketing</li>
             <li className='points'>Expand your creative  horizons</li>
           </ul>
          <div className='fancybtn'>
            <a href='/abcd'>
           <button className='glow-on-hover'>
            BECOME A CAMPUS AMBASSADOR
           </button>
           </a>
           </div>
        </div>


        <div className='thirdpage' id='three'>
        <section id="conference-timeline">
    <div class="timeline-start">Brownie Points</div>
    <div class="conference-center-line"></div>
    <div class="conference-timeline-content">
  
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
            <p className='capital'>CERTIFICATION</p>
            <p>Certificate of appreciation undersigned by Kashiyatra IIT(BHU) Varanasi to all CA's.<span class="article-number">1</span></p>
          </div>
        
        </div>
        <div class="content-right-container">
          <div class="content-right">
            <p className='capital'>PRIZES</p>
            <p>Exciting prizes and goodies for top 5 campus ambassadors.<span class="article-number">2</span></p>
          </div>
          
        </div>
        <div class="meta-date">
          <span class="date">KY</span>
          
        </div>
      </div>
    
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
            <p className='capital'>CONCERT PASSES</p>
            <p>Get premium access to concerts and EDM nights.<span class="article-number">3</span></p>
          </div>
          
        </div>
        <div class="content-right-container">
          <div class="content-right">
            <p className='capital'>OFFICIAL MERCHANDISE</p>
            <p>Own and flaunt official branded Kashiyatra merchandise<span class="article-number">4</span></p>
          </div>
          
        </div>
        <div class="meta-date">
          <span class="date">KY</span>
          
        </div>
      </div>
      
      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
            <p className='capital'>MEET THE STARS</p>
            <p>Get a chance to take selfies with famous celebs and artists.<span class="article-number">5</span></p>
          </div>
        </div>
        <div class="meta-date">
          <span class="date">KY</span>
        </div>
      </div>
      
    </div>
  </section>
        </div>


        <div className='fourthpage' id='four'>
          
          <h2 className='publicity'>
            Publicity
          </h2>

          <div className='firstcontact'>
            <ul>
              <li>Utkarsh Dwiwedi</li>
              <li>uthkarsh.dwiwedi.mec17@itbhu.ac.in</li>
              <li>(788)043-9042</li>
            </ul>
          </div>

          <div className='secondcontact'>
            <ul>
              <li>Sharad Ghodke</li>
              <li>sharad.ghodke.mec17@itbhu.ac.in</li>
              <li>(896)285-1919</li>
            </ul>
          </div>

        </div>

        <div className='footer' id='five'>
          <div className='firstcolumn'>
            <label className='label'>Quick Links</label>
            <a href=''>Register</a>
            <a href=''>Privacy Policy</a>
          </div>

          <div className='secondcolumn'>
            <label className='label'>Videos and Images</label>
            <a href=''>Gallery</a>
            <a href=''>Aftermovie</a>
          </div>

          <div className='thirdcolumn'>
            <label className='label'>Campus Ambassadors</label>
            <a href=''>Rules and Regulations</a>
            <a href=''>Why CA?</a>
          </div>

          <div className='fourthcolumn'>
            <label className='label'>Learn More</label>
            <a href=''>FAQs</a>
            <a href=''>Previous Year Sponsers</a>
          </div>
        </div>

      
      
        
</div>
  );
}

export default App;
