import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import './pages/HowItWorks.css';
import './RealDeals.css';
import './Testimonials.css';
import logo1 from './img/logo1.png';
import logo2 from './img/logo2.png';
import logo3 from './img/logo3.png';
import logo4 from './img/logo4.png';
import logo5 from './img/logo5.png';
import frame1 from './img/Frame.png';
import frame2 from './img/Frame (1).png';
import frame3 from './img/Frame (2).png';
import frame4 from './img/Frame4.png';
import deal1 from './img/IMAGE.png';
import deal2 from './img/IMAGE (1).png';
import deal3 from './img/IMAGE (2).png';
import deal4 from './img/IMAGE (3).png';
import deal5 from './img/IMAGE (4).png';

function App() {
  const getCarouselConfig = () => {
    const w = window.innerWidth;
    if (w < 480) return { slidesPerView: 1, cardWidth: 280, gap: 14 };
    if (w < 768) return { slidesPerView: 3, cardWidth: 220, gap: 16 };
    if (w < 1024) return { slidesPerView: 5, cardWidth: 260, gap: 18 };
    return { slidesPerView: 5, cardWidth: 300, gap: 20 };
  };
  const [carouselConfig, setCarouselConfig] = useState(getCarouselConfig());

  useEffect(() => {
    const onResize = () => setCarouselConfig(getCarouselConfig());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const deals = useMemo(
    () => [
      {
        image: deal1,
        price: '$525',
        discount: '50% off normally $1,200+',
        route: 'San Francisco → Tokyo'
      },
      {
        image: deal2,
        price: '$285',
        discount: '71% off normally $1000+',
        route: 'New York City → Berlin'
      },
      {
        image: deal3,
        price: '$100',
        discount: '88% off normally $800+',
        route: 'Boston → Reykjavik'
      },
      {
        image: deal4,
        price: '$282',
        discount: '65% off normally $800+',
        route: 'New York City → Barcelona'
      },
      {
        image: deal5,
        price: '$166',
        discount: '67% off normally $500+',
        route: 'Chicago → Cancun'
      }
    ],
    []
  );

  const baseLen = deals.length;
  const loopDeals = useMemo(() => [...deals, ...deals, ...deals], [deals]);

  // keep the active slide in the middle copy so we can loop infinitely
  const [loopIndex, setLoopIndex] = useState(() => baseLen);
  const [enableTransition, setEnableTransition] = useState(true);

  const nextSlide = () => {
    setEnableTransition(true);
    setLoopIndex((i) => i + 1);
  };

  const prevSlide = () => {
    setEnableTransition(true);
    setLoopIndex((i) => i - 1);
  };

  // Centering is handled by CSS padding on the wrapper.
  const translateX = -(loopIndex * (carouselConfig.cardWidth + carouselConfig.gap));

  const handleCarouselTransitionEnd = () => {
    if (loopIndex >= baseLen * 2) {
      setEnableTransition(false);
      setLoopIndex(loopIndex - baseLen);
      requestAnimationFrame(() => setEnableTransition(true));
      return;
    }
    if (loopIndex < baseLen) {
      setEnableTransition(false);
      setLoopIndex(loopIndex + baseLen);
      requestAnimationFrame(() => setEnableTransition(true));
    }
  };

  // Testimonials slider (next page) – finite, slower, stops at ends
  const testimonials = [
    {
      quote:
        "I got an alert from Going to Tokyo for $550 RT and immediately messaged my fiance to book! We visited Tokyo, Kyoto, Hiroshima, and Osaka. My fiance also proposed in Tokyo!!! Such an incredibly special trip that we'll never forget.",
      name: 'Maggie H.',
      meta: 'Member',
    },
    {
      quote:
        "We'd always talked about Spain, but flights were too expensive. Thanks to one of your Europe sale notifications, our flights were only around $680 for two!",
      name: 'Drew C.',
      meta: 'Member since 2015',
    },
    {
      quote:
        'Thanks for the info on the Denver to Rome flight for $346 last November. At that price, I was able to turn my individual adventure trip into a super-cool family trip with my wife and two daughters.',
      name: 'Thomas P.',
      meta: 'Member since 2017',
    },
    {
      quote:
        "I didn't think I could afford to travel this much. Now I average 3 trips a year, all because of the deals I get from Going.",
      name: 'Kristin L.',
      meta: 'Member',
    },
    {
      quote:
        'Because of Going, I finally took my dream trip to Iceland and saw the Northern Lights for less than half the usual price.',
      name: 'Samir R.',
      meta: 'Member',
    },
  ];

  const TESTIMONIAL_CARD_WIDTH = 320;
  const TESTIMONIAL_GAP = 24;
  const TESTIMONIALS_PER_VIEW = 3;
  const maxTestimonialIndex = Math.max(0, testimonials.length - TESTIMONIALS_PER_VIEW);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => Math.min(prev + 1, maxTestimonialIndex));

  const prevTestimonial = () =>
    setTestimonialIndex((prev) => Math.max(prev - 1, 0));

  const testimonialTranslateX =
    -(testimonialIndex * (TESTIMONIAL_CARD_WIDTH + TESTIMONIAL_GAP));

  return (
    <div className="main-page">
      {/* HomePage Section */}
    <div className="App">
        {/* Header */}
        <header className="header">
          <div className="header-left">FORMERLY SCOTT'S CHEAP FLIGHTS</div>
          <div className="header-right">LOGIN</div>
        </header>

        {/* Main Content */}
        <main className="main-content">
          <div className="hero-section">
            <h1 className="headline">
              <span className="headline-line1">Less overpaying.</span>
              <span className="headline-line2">More traveling.</span>
            </h1>
            <p className="subheadline">
              Meet the travel membership that saves you hundreds on flights.
            </p>
            <button className="cta-button" onClick={() => {
              document.querySelector('.how-it-works-section')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>GET FREE FLIGHT ALERTS</span>
              <span className="button-icons">
                <span className="airplane-icon">✈</span>
              </span>
            </button>
          </div>
        </main>

        {/* As Seen In Section */}
        <section className="as-seen-in">
          <h2 className="as-seen-in-title">AS SEEN IN</h2>
          <div className="media-logos">
            <div className="logo-item">
              <img src={logo1} alt="Live Kelly and Ryan" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo2} alt="The New York Times" className="logo-image" />
            </div>
            <div className="logo-item">
              <img src={logo3} alt="TODAY" className="logo-image" />
            </div>
            <div className="logo-item logo-gma-item">
              <img src={logo4} alt="Good Morning America" className="logo-image logo-gma" />
            </div>
            <div className="logo-item">
              <img src={logo5} alt="BuzzFeed" className="logo-image" />
            </div>
          </div>
        </section>
      </div>

      {/* How It Works Section */}
      <div className="how-it-works-page">
        {/* How It Works Section */}
        <section className="how-it-works-section">
          <h1 className="how-it-works-title">How Going™ Works</h1>
          
          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-icon">
                <img src={frame1} alt="Airport" className="step-icon-image" />
              </div>
              <h2 className="step-title">Start with your airport.</h2>
              <p className="step-description">
                Choose US departure airports like your biggest airport, closest airport, and maybe even your parent's.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-icon">
                <img src={frame2} alt="Watch deals" className="step-icon-image" />
              </div>
              <h2 className="step-title">Watch the deals roll in.</h2>
              <p className="step-description">
                We keep a close eye on airfare to over 900 destinations around the world. When the prices drop, you know.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-icon">
                <img src={frame3} alt="Book it" className="step-icon-image" />
              </div>
              <h2 className="step-title">Then book it.</h2>
              <p className="step-description">
                With flight details, booking links, and timeline estimates, all that's left for you is to say, "Let's go!"
              </p>
            </div>
          </div>
        </section>

        {/* Background Image Section */}
        <section className="background-image-section">
          <div className="scenic-background"></div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2 className="cta-title">Booked. Going. <span className="cta-title-span">Gone.</span></h2>
          <p className="cta-description">
            Most deals are 40-90% off normal prices with great itineraries from the best airlines. If it's not an amazing deal, we won't send it.
          </p>
          <button className="cta-button-purple" onClick={() => {
            document.querySelector('.real-deals-section')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <span>GET FREE</span>
            <span>FLIGHT</span>
          </button>
        </section>
      </div>

      {/* Real Deals Section */}
      <section className="real-deals-section">
        <div className="real-deals-container">
          <h2 className="real-deals-title">
            <span className="title-highlight">Real deals</span> members booked
          </h2>
          
          <div className="deals-carousel">
            <button className="carousel-button carousel-button-left" onClick={prevSlide} aria-label="Previous deal">
              <span className="arrow-icon">✈</span>
            </button>
            
            <div
              className="carousel-wrapper"
              style={{
                '--deal-card-width': `${carouselConfig.cardWidth}px`,
                '--deal-gap': `${carouselConfig.gap}px`
              }}
            >
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(${translateX}px)`,
                  transition: enableTransition ? undefined : 'none'
                }}
                onTransitionEnd={handleCarouselTransitionEnd}
              >
                {loopDeals.map((deal, index) => {
                  const dist = Math.abs(index - loopIndex);
                  let cardClass = 'deal-card';

                  if (dist === 0) cardClass += ' deal-card-center';
                  else if (dist === 1) cardClass += ' deal-card-side';
                  else if (dist === 2) cardClass += ' deal-card-back';
                  else cardClass += ' deal-card-hidden';

                  return (
                    <div key={`${deal.route}-${index}`} className={cardClass} style={{ zIndex: 10 - dist }}>
                      <div className="deal-image-container">
                        <img src={deal.image} alt={deal.route} className="deal-image" />
                      </div>
                      <div className="deal-info">
                        <div className="deal-price">{deal.price}</div>
                        <div className="deal-discount">{deal.discount}</div>
                        <div className="deal-route">{deal.route}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <button className="carousel-button carousel-button-right" onClick={nextSlide} aria-label="Next deal">
              <span className="arrow-icon">✈</span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Page / Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">
            Loved by over{' '}
            <span className="testimonials-highlight">two million</span>{' '}
            travelers
          </h2>

          <div className="testimonials-carousel">
            <button
              className="testimonials-nav testimonials-nav-left"
              onClick={prevTestimonial}
              disabled={testimonialIndex === 0}
              aria-label="Previous testimonial"
            >
              <span className="arrow-icon">←</span>
            </button>

            <div className="testimonials-wrapper">
              <div
                className="testimonials-track"
                style={{ transform: `translateX(${testimonialTranslateX}px)` }}
              >
                {testimonials.map((t, index) => (
                  <article key={index} className="testimonial-card">
                    <p className="testimonial-quote">“{t.quote}”</p>
                    <div className="testimonial-footer">
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-meta">{t.meta}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <button
              className="testimonials-nav testimonials-nav-right"
              onClick={nextTestimonial}
              disabled={testimonialIndex === maxTestimonialIndex}
              aria-label="Next testimonial"
            >
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA + Footer Page */}
      <section className="final-cta-section">
        <div className="final-cta-inner">
          <div className="final-cta-illust">
            <img src={frame4} alt="Happy traveler" />
          </div>
          <div className="final-cta-content">
            <h2 className="final-cta-title">Never overpay for flights again</h2>
            <p className="final-cta-text">
              Everything great about going on vacation without the stress of searching
              for flights.
            </p>
            <button className="final-cta-button">
              GET FREE FLIGHT ALERTS
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-column">
            <h3 className="footer-heading">About</h3>
            <ul>
              <li>How It Works</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Premium Membership</li>
              <li>Elite Membership</li>
              <li>Newsroom</li>
              <li>Member Stories</li>
              <li>Referral</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li>On The Fly</li>
              <li>Travel Glossary</li>
              <li>Window Seat Blog</li>
              <li>How To Find Cheap Flights</li>
              <li>Study Abroad Scholarship</li>
              <li>Travel Community</li>
              <li>Advertise With Us</li>
              <li>Become An Affiliate</li>
              <li>Media Kit</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column footer-follow">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="footer-socials">
              <span className="footer-social-icon">f</span>
              <span className="footer-social-icon">in</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



export default App;
