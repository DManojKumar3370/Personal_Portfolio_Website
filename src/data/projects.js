// Add real screenshots to public/assets/projects and set image to the filename.
export const projects = [
  {
    id: 'business-sales', number: '01', featured: true,
    title: 'Business Sales Performance Analytics', category: 'Power BI Dashboard',
    tools: ['Power BI', 'Power Query', 'DAX', 'Data Analysis', 'Data Visualization'],
    description: 'An interactive dashboard exploring business sales, profitability, and the details behind performance across regions and product categories.',
    objective: 'Turn raw sales data into an understandable view of business performance, with interactive filtering and KPI visualizations.',
    analyzed: 'Sales, profit, regional contribution, shipping modes, product categories, and sub-categories.',
    features: ['Sales and profit analysis', 'Regional performance analysis', 'Product category analysis', 'Sub-category analysis', 'Shipping mode analysis', 'KPI cards', 'Interactive filters and slicers', 'Business performance visualization'],
    image: 'business-sales.png', previewTitle: 'Business Sales Performance Dashboard',
  },
  {
    id: 'automobile', number: '02', title: 'Automobile Data Analysis Using Python', category: 'Python Data Analysis',
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Data Cleaning'],
    description: 'A team project exploring vehicle characteristics, pricing patterns, and relationships through Python-based exploratory data analysis.',
    role: 'Data Analysis Team Member',
    objective: 'Explore patterns and relationships in automobile data through preprocessing, statistical exploration, segmentation, and visualization as part of a team project.',
    analyzed: 'Vehicle price, horsepower, engine size, fuel type, body style, curb weight, and drive configuration.',
    features: ['Data cleaning and preprocessing', 'Exploratory Data Analysis', 'Automobile price analysis', 'Horsepower analysis', 'Engine size analysis', 'Fuel type analysis', 'Body style analysis', 'Vehicle segmentation', 'Correlation analysis', 'Data visualization'],
    image: 'automobile-distributions.png', previewTitle: 'Automobile Data Analysis',
    gallery: [{ image: 'automobile-relationships.png', caption: 'Team project: visual exploration of vehicle weight, fuel economy, and model year.' }],
  },
  {
    id: 'toy-manufacturing', number: '03', title: 'Toy Manufacturing Data Analysis', category: 'Tableau Dashboard',
    tools: ['Tableau', 'Data Visualization', 'Data Analysis', 'Dashboard Design'],
    description: 'A Tableau dashboard exploring toy manufacturing trends, geographic distribution, and manufacturer counts across U.S. states and years.',
    objective: 'Explore toy manufacturing across U.S. states and years through an interactive Tableau dashboard.',
    analyzed: 'Manufacturing trends over time, geographic distribution, manufacturer counts, and states with higher concentrations of toy manufacturers.',
    features: ['Manufacturer trends over time', 'State-wise manufacturing analysis', 'Geographic comparison', 'Top manufacturing states', 'Interactive visual exploration', 'Dashboard development'],
    image: 'toycraft-tableau.png', previewTitle: 'ToyCraft Tableau Dashboard',
  },
];
