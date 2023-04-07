import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="GDPR">
      <CookiesPolicyContainer>
        <RichText>
          <div className="row">
            <div className="col-12 dtg_contact_form">
              <div className="title-hedding">
                <h1>GDPR</h1>{' '}
              </div>

              <div className="m_content">
                <p>
                  <strong>About GDPR</strong>
                </p>
                <p>
                  The GDPR, or&nbsp;General Data Protection Regulation, is a European privacy law that went into effect in May 2018. It
                  regulates how personal data of individuals in the EU can be collected, used, and processed. The law impacts European
                  companies, businesses that target European individuals, and those that collect, use, or process the personal data of
                  European individuals. This means the GDPR will apply to most organisations that process personal data of EU
                  individuals—regardless of where the business is established and where their processing activities take place.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>What constitutes personal data under GDPR?</strong>
                </p>
                <p>
                  The GDPR defines “personal data” as any information that can be used to directly or indirectly identify a person, such as
                  a name, unique identifier, photograph, email address, or IP address.
                </p>
                <p>&nbsp;</p>
                <p>
                  <strong>What requirements does the GDPR impose on organisations?</strong>
                </p>
                <p>The GDPR imposes the following principles-based requirements:</p>
                <ul>
                  <li>
                    Personal data must be processed in a fair, legal, and transparent way for the purpose(s) that the data subject
                    reasonably expected at the time of collection.
                  </li>
                  <li>
                    Organisations must be transparent and specify at the time of collection what personal data they collect, how it will be
                    used and shared, and how long it will be retained.
                  </li>
                  <li>Personal data should be held no longer than necessary to fulfil its purpose.</li>
                  <li>
                    Data subjects have specific rights regarding their personal data. They include the right to request access, deletion, or
                    correction of their personal data; the right to restrict processing of their data; and the right obtain their data in a
                    format that will enable the data subject to transport their data to another organisation.
                  </li>
                </ul>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>What roles are assigned to organisations under the GDPR?</strong>
                </p>
                <p>
                  Organisations are assigned the role of data controller or data processor. Many organisations will qualify as both,
                  depending on the relationship of the parties and specific data processing activities. This is how BlinkTime views those
                  roles and associated responsibilities:
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Data Controller</strong>
                </p>
                <p>
                  A “data controller” is the party that alone or jointly with others determines the purposes and means of the processing of
                  personal data, and processes the personal data for its own purposes. While using BlinkTime to amend or schedule your own
                  calendar, users (“you”) are the data controller because you determine the purpose (e.g. scheduling an event) and the means
                  (using BlinkTime) of processing the personal data. Separately, BlinkTime is a data controller for the personal data
                  associated with your BlinkTime account (e.g. your business contact information) because we control the means and purposes
                  of this processing for our use: invoicing, to communicate information about your account and for other administrative
                  functions.
                </p>
                <p>
                  <strong>&nbsp;</strong>
                </p>
                <p>
                  <strong>Data Processor</strong>
                </p>
                <p>
                  BlinkTime is the “data processor” because we process personal data on your behalf under an agreement in which you tell us
                  what data to process, for what purpose(s), how long we can keep the data, and any restrictions you impose on our use of
                  the data.
                </p>
              </div>
            </div>
          </div>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
