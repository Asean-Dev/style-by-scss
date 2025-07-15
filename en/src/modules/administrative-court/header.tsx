"use client";

import { ContainerCore } from "@/components/core/container";
import { CustomBreadcrumbs } from "@/components/core/custom-breadcrumbs";
import { ConfigNavBar } from "@/layouts/config-nav-bar";
export const HeaderAdministrativeCourt = ({
  mainModule,
  children,
  title,
}: {
  mainModule: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  const subMenuOne = ConfigNavBar.find(
    (item) => item.pathSegment === "administrative-court"
  )?.subMenu?.one;
  const subMenuTow = ConfigNavBar.find(
    (item) => item.pathSegment === "administrative-court"
  )?.subMenu?.tow;

  return (
    <ContainerCore sx={{}}>
      <CustomBreadcrumbs
        links={{
          modules: "Administrative Court",
          mainModule: mainModule,
          subModules: [...(subMenuOne || []), ...(subMenuTow || [])],
        }}
        title={title}
      />
      {children}
    </ContainerCore>
  );
};
