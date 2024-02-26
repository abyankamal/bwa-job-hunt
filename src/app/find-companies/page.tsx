"use client";

import React from "react";
import { CompanyType, filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import { useForm } from "react-hook-form";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ExploreDataContainer from "@/containers/ExploreDataContainer";

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "industry",
    items: CATEGORIES_OPTIONS,
  },
];

export default function FindCompaniesPage() {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => {
    console.log(val);
  };
  return (
    <ExploreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForms={FILTER_FORMS}
      title="dream companies"
      subtitle="Find the dream companies you dream work for"
      loading={false}
      type="job"
      data={[]}
    />
  );
}
