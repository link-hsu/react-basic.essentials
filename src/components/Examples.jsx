import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";


export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  // const tabContent = 'Please select a topic.';
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  
  let tabContent = <p>Please select a topic</p>;
  
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton 
              onSelect={() => handleSelect('components')}  
              isSelected={ selectedTopic === 'components'}
            >
              components
            </TabButton>
            <TabButton 
              onSelect={() => handleSelect('jsx')}  
              isSelected={ selectedTopic === 'jsx'}
            >
              jsx
            </TabButton>
              
            <TabButton 
              onSelect={() => handleSelect('props')}  
              isSelected={ selectedTopic === 'props'}
            >
              props
            </TabButton>            
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}