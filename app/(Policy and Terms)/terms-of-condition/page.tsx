import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="lg:px-20 px-4 pt-8">
      {/* Page Header */}
      <div className="lg:w-[50%] w-full md:py-20 py-5">
        <h1 className="md:text-7xl text-4xl text-primary ">
          Terms & Conditions
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-10">
        {/* Introduction */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Introduction</h2>
          <p className="text-[18px] leading-relaxed">
            Welcome to our website. By accessing or using our services, you agree
            to be bound by these Terms & Conditions. Please read them carefully,
            as they govern your use of our platform. If you do not agree, you
            should discontinue use immediately.
          </p>
        </div>

        {/* Eligibility */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Eligibility</h2>
          <p className="text-[18px] leading-relaxed">
            You must be at least 18 years old, or the age of majority in your
            jurisdiction, to use our services. By using this site, you represent
            and warrant that you meet these requirements.
          </p>
        </div>

        {/* User Responsibilities */}
        <div>
          <h2 className="text-4xl font-medium mb-4">User Responsibilities</h2>
          <p className="text-[18px] leading-relaxed">
            When using our website, you agree not to engage in any activities that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-[18px]">Violate applicable laws or regulations</li>
            <li className="text-[18px]">
              Infringe the rights of others, including intellectual property rights
            </li>
            <li className="text-[18px]">
              Distribute malicious software or attempt to hack the platform
            </li>
            <li className="text-[18px]">
              Misuse the platform for fraudulent or misleading activities
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Intellectual Property</h2>
          <p className="text-[18px] leading-relaxed">
            All content, trademarks, logos, and materials available on this site
            are the property of the company or its licensors. You may not copy,
            reproduce, or distribute any content without prior written permission.
          </p>
        </div>

        {/* Payment & Subscriptions */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Payments & Subscriptions</h2>
          <p className="text-[18px] leading-relaxed">
            Certain features of our services may require payment. By making a
            purchase or subscribing, you agree to provide accurate billing
            information and authorize us to charge your chosen payment method.
            Fees are non-refundable except as required by law.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Limitation of Liability</h2>
          <p className="text-[18px] leading-relaxed">
            To the maximum extent permitted by law, we shall not be held liable
            for any indirect, incidental, or consequential damages arising from
            the use of our website or services. Use of our platform is at your own
            risk.
          </p>
        </div>

        {/* Termination */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Termination</h2>
          <p className="text-[18px] leading-relaxed">
            We reserve the right to suspend or terminate your access to our
            platform at any time, with or without notice, if we believe you have
            violated these Terms & Conditions.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Governing Law</h2>
          <p className="text-[18px] leading-relaxed">
            These Terms & Conditions are governed by and construed in accordance
            with the laws of your jurisdiction. Any disputes shall be resolved
            exclusively in the courts of competent jurisdiction.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Changes to Terms</h2>
          <p className="text-[18px] leading-relaxed">
            We may update these Terms & Conditions from time to time. Continued
            use of our platform after changes are posted will signify your
            acceptance of the updated terms.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Contact Us</h2>
          <p className="text-[18px] leading-relaxed">
            If you have any questions about these Terms & Conditions, you may
            contact us at:
          </p>
          <p className="text-[18px] leading-relaxed">
            <strong>Email:</strong> support@cstcorp.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
