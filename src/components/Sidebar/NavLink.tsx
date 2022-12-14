import {
  Icon,
  Link as ChakraLink,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
 
}
//...rest coleta todas as outras props adicionadas no componente , como o type não será fixo, devemos tipar com extends
export function NavLink({
  icon,
  children,
  ...rest
}: NavLinkProps) {

  return (
   
      <Link display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </Link>
  );
}
