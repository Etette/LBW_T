import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";
import React, {Fragment} from "react";

const privacy = () => {
  return (
    <Fragment>
      <title>Lagos BlockChain Week | Privacy</title>

      <img
        src="./images/schedule.png"
        className="sm:h-[30vh] h-[30vh] w-full object-cover"
        alt="schedule-image"
      />
      <div className="absolute top-0 w-full">
        <HeaderNav />
      </div>
      <div className="lg:p-20 p-4 sm:text-sm">
        <p className="text-3xl font-bold">
          {" "}
          Lagos Blockchain Week 2024 Privacy Policy
        </p>
        <p className="text-lg font-bold my-3">Introduction</p>
        Welcome to Lagos Blockchain Week 2024! This privacy policy outlines how
        we collect, use, and protect your personal information. By participating
        in our event, you agree to the terms outlined in this policy.
        <br />
        <p className="text-lg font-bold my-3"> Information We Collect</p>
        Registration Information: When you register for Lagos Blockchain Week,
        we collect basic information such as your name, email address, and
        affiliation to ensure smooth event participation.
        <br /> <br />
        Volunteer and Scholar Registration: If you choose to volunteer or
        register as a scholar, we may collect additional information related to
        your skills, experience, and areas of interest to better match you with
        suitable opportunities.
        <br /> <br />
        Partnership and Sponsorship Information: If you register to partner with
        us or sponsor the event, we may collect business-related information
        necessary for collaboration and acknowledgment.
        <br /> <br />
        Event Interaction: We may collect data related to your interactions with
        the event, such as session attendance, participation in workshops, and
        engagement with exhibitors.
        <br />
        <p className="text-lg font-bold my-3"> How We Use Your Information</p>
        Event Communication: We use your contact information to communicate
        event details, updates, and important announcements.
        <br /> <br />
        Volunteer and Scholar Matching: Information collected during volunteer
        and scholar registration helps us match your skills and preferences with
        relevant opportunities.
        <br /> <br />
        Partnership and Sponsorship Collaboration: For partners and sponsors, we
        use provided information to facilitate collaboration, acknowledge
        contributions, and coordinate logistics.
        <br /> <br />
        Event Improvement: Data related to event interaction helps us enhance
        the overall event experience and make improvements for future editions.
        <br />
        <p className="text-lg font-bold my-3"> Data Security</p>
        We take appropriate measures to protect your personal information from
        unauthorized access, disclosure, alteration, and destruction. Access to
        personal information is restricted to authorized personnel only.
        <br />
        <p className="text-lg font-bold my-3"> Sharing of Information</p>
        We do not sell, trade, or otherwise transfer your personal information
        to outside parties. However, we may share information with trusted third
        parties who assist us in organizing and conducting the event.
        <br />
        <p className="text-lg font-bold my-3"> Your Choices</p>
        You can choose not to provide certain personal information; however,
        this may limit your ability to fully participate in certain aspects of
        the event.
        <br />
        <p className="text-lg font-bold my-3"> Your Consent</p>
        By participating in Lagos Blockchain Week, you consent to the terms
        outlined in this privacy policy.
        <br />
        <p className="text-lg font-bold my-3"> Changes to the Privacy Policy</p>
        Any changes to this privacy policy will be posted on our website. It is
        your responsibility to review this policy periodically.
        <br />
        <p className="text-lg font-bold my-3"> Contact Information</p>
        If you have any questions or concerns regarding this privacy policy,
        please contact us at{" "}
        <a href="mailto:info@lagosblockchainweek.io">
          info@lagosblockchainweek.io
        </a>{" "}
        <br /> <br />
        Effective Date: 01/02/2024
      </div>
      <Footer />
    </Fragment>
  );
};

export default privacy;
