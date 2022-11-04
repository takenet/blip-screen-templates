import React from "react";

export default function AccordionDefault() {
  return (
    <bds-grid direction="column" xxs="12" gap="4" margin="y-8">
      <bds-grid xxs="12" direction="column">
        <bds-typo class="title-2" variant="fs-24" bold="bold">
          Accordion Default
        </bds-typo>
        <hr />
      </bds-grid>

<bds-grid direction="column" gap="1" xxs="12">
    <bds-typo bold="bold">The structure HTML</bds-typo>
      <bds-paper>
        <bds-grid
          xxs="12"
          direction="column"
          padding="2"
          justify-content="center"
        >
          <bds-typo variant="fs-14" bold="regular">
            <code>
              <pre>
                {`<bds-accordion>
    <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
    <bds-accordion-body>
        <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
    </bds-accordion-body>
</bds-accordion>`}
              </pre>
            </code>
          </bds-typo>
        </bds-grid>
      </bds-paper>
</bds-grid>
      
      <bds-grid xxs="12" direction="column" gap="1">
        <bds-typo bold="bold">The component</bds-typo>
        <bds-paper>
           <bds-accordion>
            <bds-accordion-header accordion-title="Title accordion"></bds-accordion-header>
            <bds-accordion-body>
              <bds-typo variant="fs-16">Lorem ipsum dolor sit amet...</bds-typo>
            </bds-accordion-body>
          </bds-accordion>
        </bds-paper>
      </bds-grid>
      
    </bds-grid>
  );
}
