const steps = [
  { title: 'Understand Requirements', description: 'Review the dataset and understand the desired output.' },
  { title: 'Prepare the Data', description: 'Clean and transform the provided data when needed.' },
  { title: 'Build the Analysis', description: 'Create the required dashboard, analysis, SQL queries, or visualizations.' },
  { title: 'Review & Deliver', description: 'Review the output and provide the final files based on the agreed requirements.' },
];

export default function HowIWork() {
  return <section className="workflow" aria-labelledby="workflow-title">
    <h3 id="workflow-title">How I Work</h3>
    <ol className="workflow-steps">{steps.map(({ title, description }, index) => <li key={title}>
      <span className="workflow-number" aria-hidden="true">0{index + 1}</span>
      <h4>{title}</h4><p>{description}</p>
    </li>)}</ol>
  </section>;
}
