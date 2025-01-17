import { withOrder } from "../components";

import { Title } from "./Title";
import { TableOfContent } from "./TableOfContent";
import { IntroductionToCaching } from "./IntroductionToCaching";
import { KeyTermsOfCaching } from "./KeyTermsOfCaching";
import { TypesOfCaching } from "./TypesOfCaching";
import { TopCachingStrategies } from "./TopCachingStrategies";
import { BenefitsAndChallenges } from "./BenefitsAndChallenges";
import { CacheEvictionPolicies } from "./CacheEvictionPolicies";
import { CacheInvalidation } from "./CacheInvalidation";

const slides = withOrder([
  <Title />,
  <TableOfContent />,
  <IntroductionToCaching />,
  <KeyTermsOfCaching />,
  <KeyTermsOfCaching />,
  <TypesOfCaching />,
  <TypesOfCaching />,
  <TypesOfCaching />,
  <TopCachingStrategies />,
  <TopCachingStrategies />,
  <TopCachingStrategies />,
  <TopCachingStrategies />,
  <TopCachingStrategies />,
  <CacheEvictionPolicies />,
  <CacheEvictionPolicies />,
  <CacheEvictionPolicies />,
  <CacheInvalidation />,
  <CacheInvalidation />,
  <BenefitsAndChallenges />,
  <BenefitsAndChallenges />,
  <BenefitsAndChallenges />,
]);

export default slides;
