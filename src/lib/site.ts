// Centralized site data — used across nav, footer, schema, CTAs
// Dairy Insurance — dairy farm & dairy operations coverage

export const SITE = {
  name: "Dairy Insurance",
  legalName: "Dairy Insurance (by Contractors Choice Agency)",
  domain: "dairy-insurance.com",
  url: "https://dairy-insurance.com",
  tagline: "Insurance for Dairy Farms & Dairy Operations",
  description:
    "Specialized commercial insurance for dairy farms and dairy operations — dairy cattle & livestock mortality, milking parlors and barns, bulk-tank and chiller equipment breakdown with milk spoilage, dairy product liability, manure and runoff pollution, workers' comp, commercial auto for milk tankers, and crop/feed. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Dairy",
  brandSub: "Farm Insurance",
  nicheShort: "dairy farm",
  nicheShortCap: "Dairy Farm",
  nichePlural: "dairy farms",
  nichePluralCap: "Dairy Farms",
  operator: "dairy operation",
  operatorCap: "Dairy Operation",
  industry: "dairy farming",
  industryCap: "Dairy Farming",
  audience: "dairy producers",
  audienceCap: "Dairy Producers",
  ownerTitle: "dairy farmer",
  regionPill: "Wisconsin · California · National",
  serviceSuffix: "Dairy Farms",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "livestock-mortality",
    title: "Dairy Cattle & Livestock Mortality",
    short: "Protect the herd that drives your income",
    description:
      "The coverage that defines a dairy's risk. Insures your milking cows, heifers, calves, and registered breeding stock against death from accident, disease, theft, and disaster — including named peril and full-mortality options on high-value animals.",
    icon: "Milk",
    keywords: ["dairy cattle insurance", "livestock mortality insurance", "dairy cow mortality coverage", "cattle death loss insurance"],
  },
  {
    slug: "farm-property",
    title: "Farm Property & Buildings",
    short: "Barns, milking parlors, silos & feed storage",
    description:
      "All-risk coverage for the dairy complex — freestall barns, milking parlors and holding areas, commodity sheds, commodity and bunker silos, feed storage, and the contents and inventory inside them. Built for livestock and manure exposures.",
    icon: "Building2",
    keywords: ["dairy farm property insurance", "barn insurance", "milking parlor coverage", "farm building insurance dairy"],
  },
  {
    slug: "equipment-spoilage",
    title: "Equipment Breakdown & Milk Spoilage",
    short: "Milking systems, bulk tanks & chillers",
    description:
      "Covers mechanical or electrical breakdown of the equipment your operation depends on — milking systems, plate coolers, bulk tanks, compressors and chillers — plus the milk and product spoilage that follows when cooling or processing fails.",
    icon: "Gauge",
    keywords: ["dairy equipment breakdown insurance", "milk spoilage insurance", "bulk tank coverage", "chiller breakdown dairy"],
  },
  {
    slug: "dairy-product-liability",
    title: "Dairy Product Liability",
    short: "For milk and dairy products you ship",
    description:
      "Coverage for bodily injury or property damage arising from contaminated, mislabeled, or defective milk and dairy products after they leave your farm or creamery — including recall costs and defense when a foodborne-illness or adulteration claim is made.",
    icon: "FlaskConical",
    keywords: ["dairy product liability insurance", "milk contamination insurance", "dairy recall coverage", "food liability dairy farm"],
  },
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Premises, agri-tourism & daily operations",
    description:
      "Third-party bodily injury and property damage protection for farm visitors, farm tours and agri-tourism, deliveries, custom heifer raising, and the day-to-day operations of running a working dairy.",
    icon: "ShieldCheck",
    keywords: ["dairy farm general liability", "agritourism insurance", "farm premises liability", "dairy GL insurance"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For milking crews, feeders & herdsmen",
    description:
      "Coverage for the real injury patterns in dairy work — animal-handling and trampling injuries, milking-parlor slip and crush injuries, equipment and PTO incidents, and chemical and manure-exposure claims. Proper class codes for dairy labor.",
    icon: "HardHat",
    keywords: ["dairy workers compensation", "farm labor workers comp", "dairy worker injury insurance", "agricultural workers comp dairy"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Trucking",
    short: "Milk tankers, feed trucks & farm vehicles",
    description:
      "Coverage for the milk tankers, feed and commodity trucks, pickup trucks, tractors, and equipment you run on public roads — including hired and non-owned auto when employees use their own vehicles on dairy business.",
    icon: "Truck",
    keywords: ["dairy commercial auto", "milk tanker insurance", "feed truck insurance", "farm vehicle coverage dairy"],
  },
  {
    slug: "pollution-environmental",
    title: "Pollution & Environmental Liability",
    short: "Manure, runoff & agrichemical exposure",
    description:
      "Covers the environmental exposure every dairy carries — manure storage and lagoon failure, nutrient and fertilizer runoff, fuel and chemical leaks, and the cleanup and third-party claims that follow a release into soil or water.",
    icon: "Droplets",
    keywords: ["dairy pollution liability", "manure runoff insurance", "farm environmental liability", "agricultural pollution coverage dairy"],
  },
] as const;

export const LOCATIONS = [
  { slug: "wisconsin", name: "Wisconsin", region: "America's Dairyland", blurb: "The heart of U.S. dairy. We insure Wisconsin operations from rotational-grazing herds in the Driftless Region to large modern freestall and parlor dairies — with class codes and markets built for Wisconsin dairy labor and manure regulations." },
  { slug: "california", name: "California", region: "Central Valley · North Coast", blurb: "The largest dairy state by production. Coverage built for California's big-herd Central Valley dairies — water-quality and air-emissions exposure, large parlor equipment values, and the state's strict nutrient-management rules." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "Oregon · Washington · Idaho", blurb: "Pasture-based and confinement dairies across the PNW. Programs sized for organic and grass-fed herds, large feed inventories, and the wet-climate manure and runoff exposures of coastal and inland operations." },
  { slug: "northeast", name: "Northeast & Mid-Atlantic", region: "NY · PA · VT · New England", blurb: "From New York and Pennsylvania to Vermont's organic creameries. Coverage for the region's smaller-herd, higher-value registered stock, bottling and on-farm processing, and seasonal pasture operations." },
  { slug: "upper-midwest", name: "Upper Midwest", region: "Minnesota · Michigan · Iowa", blurb: "Heritage dairy country across the Upper Midwest. Programs for Minnesota, Michigan, and Iowa dairies — from family tie-stall barns to expanding parlor operations, with feed and forage coverage sized for cold-climate storage." },
  { slug: "southwest", name: "Texas & the Southwest", region: "TX · NM · AZ", blurb: "Fast-growing Southwest dairy regions in the Texas Panhandle and New Mexico. Coverage for large-herd desert dairies — high water-use exposure, large lagoon systems, and feed and commodity operations under arid-climate conditions." },
  { slug: "southeast", name: "U.S. Southeast", region: "Florida · Georgia · the Carolinas", blurb: "Southeast dairies facing heat-stress, hurricane, and high-rainfall manure exposures. Programs built for Florida, Georgia, and Carolina operations — including storm and flood-surge considerations for coastal and central dairies." },
  { slug: "plains", name: "Great Plains", region: "Kansas · Nebraska · the Dakotas", blurb: "Plains-state dairies integrating with feed and forage operations. Coverage for Kansas, Nebraska, and Dakota dairies — herd mortality, large feed inventories, and the equipment and trucking exposure of expansive operations." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Dairy-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 240, suffix: "+", label: "Dairy operations insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring farm operations", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "When we lost registered Jerseys in a barn fire, our old policy undervalued the herd and shorted us on the building. Dairy Insurance rebuilt the parlor at replacement cost and the livestock mortality actually reflected what those animals were worth. Night and day.", name: "Marlene S.", role: "Herd Owner", location: "Wisconsin" },
  { quote: "A chiller failed overnight and we lost a full bulk tank. The equipment-breakdown and spoilage coverage paid the milk and the repair fast — no arguing about whether a compressor counts. They get that downtime and spoilage are the real costs on a dairy.", name: "Carl R.", role: "Operations Manager", location: "California" },
  { quote: "Two carriers had declined us over manure-runoff and lagoon exposure. These folks understood our nutrient-management plan, documented it, and placed an A-rated environmental and property program. Real dairy knowledge, not a generic farm quote.", name: "Diane K.", role: "Co-op Member", location: "New York" },
] as const;
