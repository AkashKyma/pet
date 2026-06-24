import { deliveryHighlights, deliveryTimeline, faqs, paymentMethods } from "@/data/siteData";
import { SectionHeading } from "@/components/SectionHeading";

export function DeliveryContent() {
  return (
    <section className="content-section stack-xl">
      <SectionHeading
        kicker="Shipping made simple"
        title="Delivery and payment details"
        description="Everything customers need to know about dispatch timing, secure checkout, and delivery support."
      />

      <div className="info-grid info-grid--three">
        {deliveryHighlights.map((item) => (
          <article key={item} className="info-card" data-reveal>
            <span className="tag">Delivery</span>
            <h3>{item}</h3>
            <p>Designed to keep checkout transparent and pet supplies arriving right on time.</p>
          </article>
        ))}
      </div>

      <div className="split-grid">
        <section className="panel-card" data-reveal>
          <div className="section-heading section-heading--stacked">
            <div>
              <span className="section-kicker">Payment methods</span>
              <h2>Pay the way you prefer</h2>
            </div>
            <p>All major checkout options are supported with secure processing and order confirmation right away.</p>
          </div>
          <div className="pill-grid">
            {paymentMethods.map((method) => (
              <span key={method} className="info-pill">
                {method}
              </span>
            ))}
          </div>
        </section>

        <section className="panel-card" data-reveal>
          <div className="section-heading section-heading--stacked">
            <div>
              <span className="section-kicker">Delivery timeline</span>
              <h2>From checkout to doorstep</h2>
            </div>
            <p>A simple sequence keeps customers informed from order confirmation through final delivery.</p>
          </div>
          <div className="timeline-list">
            {deliveryTimeline.map((step, index) => (
              <article key={step.title} className="timeline-step">
                <div className="timeline-step__index">0{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="content-section">
        <SectionHeading
          kicker="Frequently asked"
          title="Delivery FAQs"
          description="Clear answers about shipping, order changes, and support after purchase."
        />
        <div className="faq-grid">
          {faqs.map((item) => (
            <article key={item.question} className="info-card" data-reveal>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}