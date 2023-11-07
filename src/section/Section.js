const SectionOne = () => {
    return(
    <section class="section headingSection">
      <div class="container">
        <div class="heading">
          <div class="main-head">
            <a href="/" >Netfilx</a>
          </div>
          <div class="main-head-left">
            <a href="/" class="btn btn-sm btn-danger">Sign In</a>
          </div>
        </div>
        <div class="middle-head">
          <div class='middle-content'>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h5>Watch anywhere. Cancel anytime.</h5>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div class="subscribe">
            <input type="text" placeholder="Email"/>
            <button class='btn btn-sm btn-danger'>Get Started<li><i class="fas fa-chevron-right"></i></li></button>
          </div> 
        </div>
      </div>
    </section>
    );
};

export default SectionOne;