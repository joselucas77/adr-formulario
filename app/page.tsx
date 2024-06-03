"use client";
import PersonalForm from "@/components/form/personal-data-form";
import EcclesiasticalData from "@/components/form/ecclesiastical-data";
import { useAppContext } from "@/contexts/context";
import Finished from "@/components/finished/finished";

export default function Home() {
  const { activeTab } = useAppContext();
  return (
    <main>
      {/* {activeTab === "personal" && <PersonalForm />} */}
      {activeTab === "personal" && <EcclesiasticalData />}
      {/* {activeTab === "church" && <EcclesiasticalData />} */}
      {activeTab === "finished" && <Finished />}
    </main>
  );
}
