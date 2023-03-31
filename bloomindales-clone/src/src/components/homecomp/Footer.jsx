import React from "react";
import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";

// import { Box } from "@chakra-ui/react"
//  import {TbBrandReddit} from "react-icons/tb"
function Footer() {
  return (
    <>
      <Box
        bg="white"
        width="40%"
        borderRadius="10px"
        p={2}
        margin="-30px 30% 0px"
        border={"1px solid #bfd4d5"}
        position="absolute"
      >
        <Text
          bg="white"
          color="orange"
          fontSize="1.7rem"
          fontFamily={"monospace"}
        >
          big store for little ones
        </Text>
      </Box>

      <Box
        bg="#bfd4d5;"
        p={{ base: "4", sm: "4", md: "10", lg: "10" }}
        display={{ base: "block", sm: "block", md: "block", lg: "flex" }}
        gap={10}
        width="100%"
      >
        <Box
          width={{ base: "100%", sm: "100%", md: "50%", lg: "30%" }}
          //   border="1px solid"
        >
          <Box>
            <Image
              boxSize={"100%"}
              src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
            ></Image>
          </Box>
          <Box>
            <Image
              boxSize={"100%"}
              src="https://cdn.fcglcdn.com/brainbees/images/intellitots-franchise-footer-banner.webp"
            ></Image>
          </Box>
        </Box>
        <Grid
          mt={4}
          display={{ base: "none", sm: "none", md: "grid", lg: "grid" }}
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={6}
        >
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              CATEGORIES
            </Text>
            <Box
              mt={4}
              borderRight="1px solid"
              borderColor="lightgrey"
              textAlign="left"
            >
              <Stack _hover={{ cursor: "pointer" }}>
                <Text _hover={{ "font-weight": "600" }}>
                  Clothing & Fashion
                </Text>
                <Text _hover={{ "font-weight": "600" }}>Toys</Text>
                <Text _hover={{ "font-weight": "600" }}>Books & CDs</Text>
                <Text _hover={{ "font-weight": "600" }}>School supplies</Text>
                <Text _hover={{ "font-weight": "600" }}>
                  Birthday Party Supplies
                </Text>
                <Text _hover={{ "font-weight": "600" }}>Bath & Skin care</Text>
                <Text _hover={{ "font-weight": "600" }}>Baby Gear</Text>
                <Text _hover={{ "font-weight": "600" }}>Nursery</Text>
                <Text _hover={{ "font-weight": "600" }}>Moms & Maternity</Text>
                <Text _hover={{ "font-weight": "600" }}>Gifts</Text>
                <Text _hover={{ "font-weight": "600" }}>
                  Preschool Admissions
                </Text>
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              FIRST CRY PARENTING
            </Text>
            <Box
              mt={4}
              borderRight="1px solid "
              borderColor="lightgrey"
              textAlign="left"
            >
              <Stack _hover={{ cursor: "pointer" }}>
                <Text _hover={{ "font-weight": "600" }}>Getting Pregnant</Text>
                <Text _hover={{ "font-weight": "600" }}>Pregnancy</Text>
                <Text _hover={{ "font-weight": "600" }}>Baby</Text>
                <Text _hover={{ "font-weight": "600" }}>Toddler</Text>
                <Text _hover={{ "font-weight": "600" }}>Big kid</Text>
                <Text _hover={{ "font-weight": "600" }}>Vaccination</Text>
                <Text _hover={{ "font-weight": "600" }}>Growth Tracker</Text>
                <Text _hover={{ "font-weight": "600" }}>Baby Names</Text>
                <Text _hover={{ "font-weight": "600" }}>Coloring Pages</Text>
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              SHIPPING & POLICIES
            </Text>
            <Box
              mt={4}
              borderRight="1px solid"
              borderColor="lightgrey"
              textAlign="left"
            >
              <Stack _hover={{ cursor: "pointer" }}>
                <Text _hover={{ "font-weight": "600" }}>Payments</Text>
                <Text _hover={{ "font-weight": "600" }}>Shipping Policy</Text>
                <Text _hover={{ "font-weight": "600" }}>
                  Cancellation Policy
                </Text>
                <Text _hover={{ "font-weight": "600" }}>Terms Of Use</Text>
                <Text _hover={{ "font-weight": "600" }}>Privacy policy</Text>
                <Text _hover={{ "font-weight": "600" }}>
                  Next day & Same day delivery
                </Text>
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              OUR APPS
            </Text>
            <Box
              mt={4}
              borderRight="1px solid"
              borderColor="lightgrey"
              textAlign="left"
            >
              <Stack _hover={{ cursor: "pointer" }}>
                <Text>FistCry India: Shopping & Parenting</Text>
                <Text>FirstCry India: Shopping & Parenting iOS</Text>
              </Stack>
            </Box>
          </GridItem>
          <GridItem>
            <Text textAlign="left" fontWeight="bold">
              SHOP INTERNATIONAL
            </Text>
            <Box mt={4} borderColor="lightgrey" textAlign="left">
              <Stack _hover={{ cursor: "pointer" }}>
                <Text>FirstCry UAE</Text>
                <Text>FirstCry KSA</Text>
                <Text>FirstCry KSA(English)</Text>
                <Text>FirstCry Arabia: Shopping & Parenting iOS</Text>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <hr></hr>

      <Box
        justifyContent="space-between"
        borderBottom="1px solid lightgrey"
        width="100%"
      >
        <Box width="100%">
          <Text
            width="100%"
            p={3}
            bg="#bfd4d5"
            fontSize="12px"
            mb="-10px"
            textAlign="left"
            fontWeight="bold"
          >
            FirstCry India ~ Online Store for Baby & Kids Products
          </Text>
          <Text bg="#bfd4d5" fontSize="12px">
            Explore kids and baby products galore at FirstCry.com, the Big Store
            for Little Ones. We at FirstCry.com empathize with you as a mother
            who always aspires to bestow her newborn, infant, baby or kid with
            the best things even for their smallest needs. That is why, 'Mommy
            Knows Best'. From breastfeeding to bathing essentials, right
            furniture to myriad baby care products, a mother needs them all for
            her lil' one. This inspires us to offer convenient & hassle-free
            online shopping not just for babies & kids but for moms-to-be & new
            moms as well. With 2 Lakh Baby & Kids Products, 2 Million Happy
            Customers, and 2 Thousand+ top-notch national and international
            brands like Babyhug, Chicco, Graco, BSA, Johnson & Johnson, Huggies,
            Pampers, Medela, Pigeon, Mothercare, Fisher-Price, FunSkool, Lego,
            Disney, Barbie and more you can look forward to an unparalleled
            shopping experience with us. Shop for baby & kids products online
            ranging across diapering, feeding & nursing, skin & health care,
            baby & kids toys, newborn & infant clothing, baby clothes, kids
            wear, footwear, fashion accessories, baby gear, nursery, kids
            furniture, gifts, party supplies, books & CDs, school supplies and
            more at great discounts. With the FirstCry mobile app, now you can
            shop on the go! Download the FirstCry Android and the iOS app and
            Voila!.
          </Text>
        </Box>

        <Text
          p={3}
          bg="#bfd4d5"
          fontWeight="bold"
          fontSize="12px"
          mb="-10px"
          textAlign="left"
        >
          Newborn & Baby Products Online Shopping in India
        </Text>
        <Text bg="#bfd4d5" fontSize="12px">
          Along with all your affection and attention, your little bundle of joy
          deserves the best when it comes to newborn & baby items. Pamper your
          lil' one with the widest range of newborn & baby products: right from
          diapers to potty chairs, onesies to party wear, booties to clogs,
          carry-cots to baby walkers, rattles to learning toys, FirstCry has it
          all! FirstCry newborn baby shopping checklist..
        </Text>

        <Text
          p={3}
          bg="#bfd4d5"
          fontWeight="bold"
          fontSize="12px"
          mb="-10px"
          textAlign="left"
        >
          Online Shopping for Kids at FirstCry.com
        </Text>
        <Text bg="#bfd4d5" fontSize="12px">
          Shopping for your kid is no child's play and thus we help you explore,
          choose and buy from an exhaustive & finest collection of kids'
          products. FirstCry buying guides, premium store, boutiques, products
          checklist, and look-books are all aimed towards an enriching and a
          fulfilling shopping experience. That's what makes us your go-to online
          store for kids shopping.
        </Text>

        <Text
          p={3}
          bg="#bfd4d5"
          fontWeight="bold"
          fontSize="12px"
          mb="-10px"
          textAlign="left"
        >
          FirstCry India Offers
        </Text>
        <Text bg="#bfd4d5" fontSize="12px">
          Satisfaction and Savings come guaranteed with irresistible FirstCry
          offers & deals on a range of high quality products. These are
          including but not limited to the FirstCry shopping carnivals, loyalty
          cash program, app offers, bank & wallet offers, Free @ Three,
          cashback, Guaranteed savings offers & more. To start with, why not
          grab some great discounts with the FirstCry coupons and buy baby &
          kids products online from anywhere in India with Free Shipping, Cash
          On Delivery (COD), Same & Next day delivery & EZ returns options.
          Happy Shopping! © 2010-2022 www.FirstCry.com. All rights reserved.
          This website can be best viewed in resolution width of 1024 and above.
        </Text>
      </Box>
    </>
  );
}

export default Footer;
