import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="lg:px-20 px-4 pt-8">
      {/* Page Header */}
      <div className="lg:w-[50%] w-full md:py-20 py-5">
        <h1 className="md:text-7xl text-4xl text-primary">
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-10">
        {/* Introduction */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Introduction</h2>
          <p className="text-[18px] leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit
            our website and use our services. By accessing our platform, you agree
            to the practices described in this policy.
          </p>
        </div>

        {/* Information Collection */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Information We Collect</h2>
          <p className="text-[18px] leading-relaxed">
            We may collect both personal and non-personal information in the
            following ways:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-[18px]">
              <strong>Personal Information:</strong> such as your name, email
              address, phone number, and billing details when you sign up, make a
              purchase, or contact us.
            </li>
            <li className="text-[18px]">
              <strong>Usage Data:</strong> including pages visited, time spent on
              the website, and interactions with features.
            </li>
            <li className="text-[18px]">
              <strong>Device Information:</strong> like IP address, browser type,
              operating system, and device identifiers.
            </li>
            <li className="text-[18px]">
              <strong>Cookies and Tracking:</strong> small files stored on your
              device to improve performance and personalize your experience.
            </li>
          </ul>
        </div>

        {/* Use of Information */}
        <div>
          <h2 className="text-4xl font-medium mb-4">How We Use Your Information</h2>
          <p className="text-[18px] leading-relaxed">
            The data we collect is used for a variety of business purposes,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-[18px]">Providing and improving our services</li>
            <li className="text-[18px]">Processing transactions and payments</li>
            <li className="text-[18px]">Sending important updates and notices</li>
            <li className="text-[18px]">Responding to support requests</li>
            <li className="text-[18px]">Personalizing user experience</li>
            <li className="text-[18px]">Ensuring system security and preventing fraud</li>
          </ul>
        </div>

        {/* Sharing of Information */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Information Sharing</h2>
          <p className="text-[18px] leading-relaxed">
            We do not sell your personal information. However, we may share data
            with trusted third parties in limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-[18px]">
              With service providers who help us operate our website and deliver
              services
            </li>
            <li className="text-[18px]">
              To comply with legal obligations, court orders, or government
              requests
            </li>
            <li className="text-[18px]">
              In connection with a merger, acquisition, or sale of company assets
            </li>
          </ul>
        </div>

        {/* Data Security */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Data Security</h2>
          <p className="text-[18px] leading-relaxed">
            We implement appropriate technical and organizational measures to
            protect your data against unauthorized access, alteration, disclosure,
            or destruction. While we take reasonable precautions, no system is
            completely secure, and we cannot guarantee absolute protection.
          </p>
        </div>

        {/* Data Retention */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Data Retention</h2>
          <p className="text-[18px] leading-relaxed">
            We will retain your personal information only for as long as is
            necessary to fulfill the purposes outlined in this Privacy Policy,
            unless a longer retention period is required or permitted by law.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Your Rights</h2>
          <p className="text-[18px] leading-relaxed">
            Depending on your location, you may have the following rights under
            data protection laws:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-[18px]">Right to access and obtain a copy of your data</li>
            <li className="text-[18px]">Right to request correction of inaccurate data</li>
            <li className="text-[18px]">Right to request deletion of your personal data</li>
            <li className="text-[18px]">Right to restrict or object to processing</li>
            <li className="text-[18px]">Right to data portability</li>
          </ul>
        </div>

        {/* Children's Privacy */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Children’s Privacy</h2>
          <p className="text-[18px] leading-relaxed">
            Our services are not directed to individuals under 13 years of age,
            and we do not knowingly collect personal information from children. If
            we become aware that a child has provided us with personal data, we
            will take steps to delete it immediately.
          </p>
        </div>

        {/* Policy Updates */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Policy Updates</h2>
          <p className="text-[18px] leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes
            in technology, laws, or business operations. Updates will be posted on
            this page with the “Last Updated” date revised accordingly.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-4xl font-medium mb-4">Contact Us</h2>
          <p className="text-[18px] leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle
            your data, you can contact us at:
          </p>
          <p className="text-[18px] leading-relaxed">
            <strong>Email:</strong> support@cstcorp.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
