import React from "react";
import Navbar from "/sections/Navbar.jsx";
import Return from "/components/Buttons/Return";
import InfoBanner from "/sections/PageLayout/InfoBanner";
import HeadingDesc from "/sections/PageLayout/HeadingDesc";
import Footer from "/sections/Footer";
import FullImage from "/components/ImageCard/FullImage";
function OasisXr() {
  return (
    <div>
      <Navbar />
      <Return />
      <InfoBanner
        title="OASIS XR"
        productType="Design"
        productRole="UX/UI Designer"
        productDuration="4 Months"
        description="Oasis XR is an immersive experience where users get to connect and play calming, mindfulness activities, mediated through a VR headset."
        videoSrc="https://player.vimeo.com/video/1073426256?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
      />
      <section className="px-10 md:px-45 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Project Overview */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6 ">Problem</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                While mindfulness apps and virtual therapy tools offer
                convenience, they often leave users feeling emotionally
                disconnected and unengaged.
              </h1>
              <p className="text-lg/6 leading-relaxed mb-4">
                For my senior capstone project at the University of Connecticut,
                I set out to explore how extended reality (XR) could help people
                struggling with anxiety and stress. Mental health has always
                been a deeply personal and collective concern, but as
                traditional therapy and wellness tools shift into the digital
                realm, many users are still left feeling disconnected. Despite
                the rise of mindfulness apps like Headspace and Endel,
                engagement often drops off quickly. The sessions feel
                repetitive. The connection feels artificial. And for many,
                accessing care still feels like a privilege, not a right.
              </p>
            </div>
          </div>

          {/* MY ROLE */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-light mb-6 ">My role</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                As lead researcher and designer, I explored how XR could
                transform virtual mental health support into something
                immersive, personal, and emotionally resonant.
              </h1>
              <p className="text-lg/6 leading-relaxed mb-4">
                I began to wonder: what if mindfulness and therapy could feel
                more like an experience, not a task? What if people could enter
                a world that responded to their emotions in real time, helping
                them feel grounded without needing to speak to anyone at all?{" "}
                <br />
                With these questions in mind, I decided to investigate how XR
                could create emotional resonance—not just distraction—for users
                navigating daily stressors and deeper anxieties. I wanted to
                design something immersive, accessible, and personalized. A
                space users could return to on their own terms, whenever they
                needed relief.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="bg-white rounded-lg">
                <div className="h-48 bg-gray-50 rounded flex "></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <p className="text-lg/6 leading-relaxed">
                I started by analyzing leading mental health platforms that
                either leaned into XR or offered digital therapy services. Some,
                like Endel, were beautifully designed and rooted in science—but
                often limited by platform constraints like Apple Vision
                exclusivity. Others had expansive wellness libraries but felt
                more like content hubs than spaces for reflection. Through this
                competitive audit, patterns emerged: repetitive experiences,
                lack of personalization, costly subscriptions, and minimal
                engagement were recurring user complaints.
                <br />
                <br /> Curious about how people actually felt about their mental
                health routines and therapy options, I created a screener survey
                to identify patterns in user behavior and sentiment. Out of 27
                respondents, a surprising number had never used XR but were
                highly curious. More importantly, they expressed frustration
                with the current virtual therapy experience: they appreciated
                its convenience but often felt emotionally distant, unmotivated,
                or unsure of how to navigate sessions. Some felt that their
                sessions lacked the warmth of in-person care. Others simply
                didn’t feel seen.
              </p>
            </div>
          </div>
          {/* KEY FOCUS*/}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <div className="bg-white rounded-lg p-4">
                <div className="h-48 bg-gray-50 rounded flex flex-col"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-light mb-6 ">Key Focus</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                I wanted to understand: where do current digital tools fall
                short, and how could XR fill in the emotional and experiential
                gaps?
              </h1>
              <p className="text-lg/6 leading-relaxed mb-4">
                I spoke to users who felt burned out by the repetition of
                wellness apps. I heard from people who struggled to find time,
                couldn’t afford therapy, or were intimidated by the idea of
                speaking to a stranger. One thing was clear—there was an
                opportunity to create a new kind of mental wellness experience.
                One that didn’t just replicate therapy in a virtual setting but
                reimagined it through the lens of immersion.
              </p>
            </div>
          </div>

          {/* HOW MIGHT WE */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6 ">How Might We</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                How might we design an XR experience that creates an emotionally
                engaging space for users to feel connected, supported, and in
                control of their mental health?
              </h1>
            </div>
          </div>
          {/* SOLUTIONS */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-2xl font-light mb-6 ">Solutions</h2>
              <h1 className="text-2xl font-light mb-6 italic">
                I designed an XR prototype that creates immersive, adaptive
                environments for emotional grounding and mindfulness.
              </h1>

              <p className="text-lg/6 leading-relaxed">
                The prototype I developed invites users into calming,
                personalized XR environments—such as peaceful forests or gentle
                beaches. From the moment users put on the headset, the
                experience is designed to center them. They’re guided through
                interactive breathing exercises with ambient soundscapes, visual
                cues, and voice-based mood reflections.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6">
              <div className="bg-white rounded-lg p-4">
                <div className="h-48 bg-gray-50 rounded p-4">
                  <div className="grid grid-cols-3 gap-2 h-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* WHY IS THIS GOOD FOR USERS */}
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12">
              <h2 className="text-2xl font-light mb-6 ">
                Why is this good for users?
              </h2>
              <h1 className="text-2xl font-light mb-6 italic">
                This XR approach enables users to engage in mindfulness on their
                own terms—without barriers, judgment, or detachment.
              </h1>
              <p className="text-lg/6 ">
                Designing this experience taught me that mental health tools
                don’t just need to work—they need to feel right. When users are
                vulnerable, clarity matters. Intention matters. And immersion
                should serve as a bridge, not a barrier. While this prototype is
                still in its early stages, the process has shown me the power of
                thoughtful, emotionally attuned design. I believe XR can become
                more than a buzzword in the wellness space. It can become a
                doorway—one that helps people not just cope, but connect.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default OasisXr;
