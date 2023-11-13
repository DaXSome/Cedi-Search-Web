import { Box, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <Heading mb={4}>Welcome to Cedi Search</Heading>
      <Text fontSize="lg" mb={6}>
        Where the world of e-commerce unfolds at your fingertips! We understand
        the dynamic and ever-expanding nature of online shopping, and
        that&apos;s why we&apos;ve crafted a search engine tailored exclusively
        for the e-commerce enthusiast.
      </Text>
      <Text fontSize="lg" mb={6}>
        Our mission is simple: to connect you with the products you love from
        the vast landscape of e-commerce platforms. Whether you&apos;re hunting
        for the latest fashion trends, tech gadgets, home decor, or anything in
        between, we&apos;ve got you covered. Our advanced search algorithms sift
        through the digital aisles of your favorite online stores, bringing you
        the most relevant and up-to-date results.
      </Text>
      <Heading mb={4}>Why choose Cedi Search?</Heading>
      <UnorderedList mb={6}>
        <ListItem>
          Specialized E-commerce Focus: We are dedicated exclusively to
          e-commerce, ensuring that your search experience is finely tuned to
          the intricacies of online shopping.
        </ListItem>
        <ListItem>
          Comprehensive Product Coverage: From niche markets to mainstream
          retailers, we scan the entire spectrum of e-commerce platforms,
          ensuring you have access to a diverse array of products.
        </ListItem>
        <ListItem>
          Real-Time Updates: Stay in the loop with real-time updates on product
          availability, prices, and promotions. Never miss out on a great deal
          again!
        </ListItem>
        <ListItem>
          Smart Recommendations: Discover new and exciting products with our
          intelligent recommendation engine. Personalized suggestions make your
          shopping journey more enjoyable.
        </ListItem>
        <ListItem>
          Secure and Trustworthy: Your privacy and security are our top
          priorities. Shop with confidence, knowing that we prioritize your data
          protection.
        </ListItem>
      </UnorderedList>
      <Text fontSize="lg">
        Whether you&apos;re a seasoned online shopper or just embarking on your
        e-commerce adventure, Cedi Search is here to simplify and enhance your
        search for the perfect find. Join us in exploring the world of
        e-commerce like never before!
      </Text>
    </Box>
  );
};

export default About;
