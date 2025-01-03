// pages/experience.tsx
import React from "react";

const Experience = () => {
  return (
    <>
      <div className="container lg:ml-48 ms:ml-auto mx-auto p-6 flex-auto">
        <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Author & Developer | Freelauncer
            </h2>
            <p className="text-lg text-gray-500 mb-2">Jan 2020 - Present</p>
            <ul className="list-disc pl-6 text-lg">
              <li>
                Webmaster, Administrator and editor of a first Balochi digital
                library named Baask.com{" "}
              </li>
              <li>Designed digital libary in wordpress, smf and mysql.</li>
              <li>
                Designed youtube videos for different entities like students and
                professional.
              </li>
              <li>
                Designed various books, covers, greeting cards and event’s
                banners, brushers <br />
                and pamphlets on demand{" "}
              </li>
              <li>
                Provided online Balochi language classes to the international
                students.{" "}
              </li>
              <li>
                Online classes in Balochi, Urdu & English on Youtube channel
                “darbarjah”.
              </li>
              <li>
                Online classes of typescript and exam prepration to the
                classfellows via whatsapp video.
              </li>
              <li>Proof Reading of various literary books.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Software Consultant & Developer | Diversa Logic Pvt. Ltd.{" "}
            </h2>
            <p className="text-lg text-gray-500 mb-2">May 2008 - Dec 2018</p>
            <ul className="list-disc pl-6 text-lg">
              <li>Supply chain management (Premier Systems Private Limited)</li>
              <li> PPL application for Epson Products (ABM SERVICE Karachi)</li>
              <li> Sales and inventory control System (ABM SERVICE Karachi)</li>
              <li>
                {" "}
                Software Audit as an external auditor (Habib Insurance- Head
                office KARACHI)
              </li>
              <li> Billing System (GCG Billing System NY-USA)</li>
              <li> Sales Purchase system (American Fumigation Karachi)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              Application Administrator & Developer| ABM Data Systems (Pvt.) Ltd{" "}
            </h2>
            <p className="text-lg text-gray-500 mb-2">August 2000 - May 2008</p>
            <h2>Responsibilities:</h2>
            <ul className="list-disc pl-6 text-lg">
              <li>
                {" "}
                analysis, development, implementation and administration of
                financial accounting systems, call login systems, payroll
                systems, <br />
                inventory control systems, maintenance contract and sales
                purchase systems of the all branches of the company
                <br />
                (Karachi, Lahore, Islamabad and Hyderabad) as well as its sister
                concern companies.{" "}
              </li>
              <li>
                {" "}
                All kind of report generation from the application, on the
                request of upper and middle management{" "}
              </li>
              <li>
                {" "}
                System applications auditing on quarterly, half yearly and
                yearly bases
              </li>
              <li>
                Cooperation with external auditors at the end of any fiscal year
                to provide them their desired reports.
              </li>
              <li>
                Training and presentation of the application system, to the
                individual users as well as related department or branch in
                company premises <br />
                in case of major changes in existing systems.
              </li>
              <li>
                Prompt response on any kind of query from any department of the
                company.
              </li>
              <li> Trouble shooting and support. </li>
            </ul>
            <h2>During my job I have finished following projects. :</h2>
            <ul className="list-disc pl-6 text-lg">
              <li> Centralized Call login application, for the ABM SERVICES</li>
              <li>
                Call login system for support service division- All branches of
                ABM Data Systems Pvt. Ltd.
              </li>
              <li>
                Inventory Control Systems for the main parts & modules and Parts
                & Spares <br />
                at Logistic & Purchase Department All branches of ABM Data
                Systems Pvt. Ltd
              </li>
              <li>
                Inventory Control Systems for the main parts & modules and Parts
                & Spares at <br />
                Logistic & Purchase Department All branches of Electronic Trade
                Centre Pvt. Ltd.
              </li>
              <li>
                Inventory Control Systems for the main parts & modules and Parts
                & Spares at Logistic & Purchase Department. All branches of
                Shakir Traders
              </li>
              <li>
                A/C receivable, A/C payable, General Ledger, Payroll, Earnest
                Money and Security Deposit systems for the Finance department{" "}
                <br />
                of all branches of the ABM Data Systems Pvt Ltd.
              </li>
              <li>
                Maintenance Contract, Management Information System, Online
                Warranty Lookup system for the administration-ABM Data Systems
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Experience;
