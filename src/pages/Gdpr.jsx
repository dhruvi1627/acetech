import React from 'react';

const Gdpr = () => {
  return (
    <div className="bg-black text-white min-h-screen p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Title */}
        <div className="text-center mb-16 font-bebas mt-16">
          <h1 className="text-5xl font-bold uppercase tracking-wider">
            Privacy Policy (GDPR)
          </h1>
        </div>
        
        {/* Section 1: Introduction */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wider font-bebas">
            1. Introduction
          </h2>
          <p className="text-gray-300 leading-relaxed font-roboto tracking-wider">
            Welcome to the acetechinside.tech website (hereinafter "the Site"), operated by AceTechInside. We are committed to protecting the confidentiality of your personal information. This Privacy Policy describes how we collect, use and protect your personal data in accordance with the General Data Protection Regulation (GDPR).
          </p>
        </section>

        {/* Section 2: Data Controller */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            2. Data Controller
          </h2>
          <p className="text-gray-300 leading-relaxed font-roboto tracking-wider">
            The data controller for the Site is AceTechInside, 63 rue Tolbiac,75013 Paris. 
            <span className="text-purple-400 ml-1">info@acetechinside.tech</span>
          </p>
        </section>

        {/* Section 3: Personal Data Collected */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            3. Personal Data Collected
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            We collect the following personal data:
          </p>
          <ul className="text-gray-300 space-y-3 ml-6 font-roboto">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>First and last name</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>E-mail address</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Phone number</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Mailing address</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Payment information (if applicable)</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>IP address and browsing data</span>
            </li>
          </ul>
        </section>

        {/* Section 4: Use of Personal Data*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            4. Use of Personal Data
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            We use your personal data to:

          </p>
          <ul className="text-gray-300 space-y-3 ml-6 font-roboto">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Provide and manage our services and products</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Communicating with you regarding your account or transactions</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Improve our site and services</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Comply with legal obligations</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Personalize your user experience</span>
            </li>
          </ul>
        </section>

        {/* Section 5: Sharing of Personal Data*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            5. Sharing of Personal Data
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            We do not share your personal data with third parties, except in the following cases:

          </p>
          <ul className="text-gray-300 space-y-3 ml-6 font-roboto">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Where necessary to provide our services</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>To comply with a legal or regulatory obligation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>With your explicit consent</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>To protect our rights, safety or the safety of others</span>
            </li>
          </ul>
        </section>

        {/* Section 6: Data Retention*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            6. Data Retention
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or to comply with legal requirements.
          </p>
        </section>

        {/* Section 7: Your Rights*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            7. Your Rights
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            In accordance with the GDPR, you have the right to:
          </p>
          <ul className="text-gray-300 space-y-3 ml-6 font-roboto">
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Access your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Rectify your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Delete your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Limit the processing of your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Object to the processing of your personal data</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Data portability</span>
            </li>
            <p className="text-gray-300 leading-relaxed mb-6">
                To exercise these rights, please contact us at the following email address: info@acetechinside.tech
            </p>
          </ul>
        </section>

        {/* Section 8: Data Security*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            8. Data Security
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            We take appropriate technical and organizational measures to protect your personal data against loss, theft, and unauthorized access.
          </p>
        </section>

        {/* Section 9: Cookies*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            9. Cookies
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            The Site uses cookies to improve the user experience. You can set your browser to refuse cookies, but this may affect your ability to use certain features of the Site.
          </p>
        </section>

        {/* Section 10: Changes to the Privacy Policy*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            10. Changes to the Privacy Policy
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
          </p>
        </section>

        {/* Section 11: Contact*/}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-wider font-bebas">
            8. Contact
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-roboto">
            If you have any questions or concerns about this Privacy Policy or how we treat your personal data, please contact us at the following email address: info@acetechinside.tech
          </p>
        </section>
      </div>
    </div>
  );
};

export default Gdpr;