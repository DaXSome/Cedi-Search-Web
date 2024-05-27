import { Box } from "@chakra-ui/react";
import { FC } from "react";
import {  BsStarFill } from "react-icons/bs";

interface IProductStarsProps {
  rating: number;
}
const ProductStars: FC<IProductStarsProps> = ({ rating }) => {
  return (
    <Box 
      bgColor={"orange.400"}
      textColor={"white"} 
      borderRadius={"25px"} 
      paddingX={2} 
      paddingY={1} 
      display="flex" 
      alignItems="center">
      <BsStarFill
        style={{ marginRight: "5" }}
        color={"white"}
      />
      {rating.toFixed(1)}
    </Box>
  );
};

export default ProductStars;
