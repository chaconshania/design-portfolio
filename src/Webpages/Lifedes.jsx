import React from "react";
import Navbar from "/sections/Navbar";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";
import InfoBanner from "/sections/PageLayout/InfoBanner";
import Return from "/components/Buttons/Return";
import Footer from "/sections/Footer";
function Lifedes() {
  return (
    <div>
      <Navbar />
      <Return />
      <InfoBanner
        title="LIFEDES"
        productType="Design"
        productRole="UX/UI Designer"
        productDuration="1 Week"
        description="Designing a modern, responsive fashion and lifestyle digital publication that provides an engaging, editorial-style reading experience for users on both web and mobile platforms."
        image="/assets/Images/Lifedes/Lifedes_cover.png"
      />
      <section className="px-10 md:px-45 py-8">
        <div className="max-w-6xl mx-auto">
          {/* CONTEXT */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6">Context</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                The challenge was simple: make fashion feel alive on a screen.
              </h1>
              <p className="text-lg/6 leading-relaxed">
                Fashion has always thrived on strong visuals, but in the
                transition to digital—especially mobile—much of that richness
                gets lost. Many lifestyle publications feel either overdesigned
                and clunky or stripped down to the point of blandness. I wanted
                to explore something in between: an experience that feels
                editorial, bold, and made to move.
              </p>
            </div>
          </div>

          {/* CONCEPT */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6">The Concept</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                A fast, flexible design that translates editorial energy into
                responsive formats.
              </h1>
              <p className="text-lg/6 leading-relaxed">
                Lifedes was a quick design exploration grounded in this tension.
                The idea was to build a digital publication that brought the
                structure and pacing of a fashion magazine into a responsive,
                mobile-first layout. I envisioned large-scale visuals, elegant
                spacing, and content modules that could flex across screen sizes
                without compromising visual impact.
              </p>
            </div>
          </div>

          {/* SOLUTION */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6">The Solution</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                Clean layouts, modular storytelling, and design that moves with
                the reader.
              </h1>
              <p className="text-lg/6 leading-relaxed">
                he goal was to create a space that felt intentional—something
                built for people who appreciate both fashion and thoughtful
                design. I leaned into a modern newspaper aesthetic: bold,
                structured layouts with just enough edge to feel editorial.
                Black-and-white visuals kept things clean, while subtle hover
                interactions, like images fading into color. It was less about
                decoration and more about guiding attention, helping users slow
                down and actually connect with the content.
              </p>
            </div>
          </div>

          {/* VALUE */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6">End Points</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                Good design shouldn’t ask users to choose between beauty and
                usability.
              </h1>
              <p className="text-lg/6 leading-relaxed">
                This wasn’t about inventing something radically new. It was
                about refining what already exists, and doing it with clarity.
                Readers doesn’t have the patience to fight with a layout—but
                that doesn’t mean they don’t care about beauty.
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h1 className="text-2xl font-light mb-6 italic">
                Want to see the prototype?
              </h1>
              <p className="text-lg/6 leading-relaxed">
                If you’d like to see the visual walkthrough or explore the
                prototype, feel free to reach out at{" "}
                <a className="underline" href="mailto:chacon1shania@gmail.com">
                  chacon1shania@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Lifedes;
