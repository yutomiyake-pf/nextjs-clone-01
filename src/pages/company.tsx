import Company from "@/components/Company";
import BaseLayout from "@/components/layout/BaseLayout";
import { NextPage } from "next";

const CompanyPage: NextPage = () => {
  return (
    <BaseLayout>
      <Company />
    </BaseLayout>
  );
};

export default CompanyPage;
