import React from "react";
import { Header } from "../organisms/Header/Header";

export const NamespaceTitleSkeleton = ({children}: any) => {
  return (
    <div className="relative overflow-hidden animate-pulse">
      <div className="bg-gray w-full h-full">{children}</div>
    </div>
  );
};

export const NamespacePageSkeleton = ({children}: any) => {
  return (
    <>
      <Header />
      <div className="bg-blue-400">{children}</div>
    </>
  );
};

export const NamespaceDataSkeleton = () => {
  return (
    <div className="bg-blue-400 md:p-10">
      <div className="h-2 bg-gray rounded-full w-48 mb-2.5"></div>
      <div className="h-2 bg-gray rounded-full w-48 mb-2.5"></div>
      <div className="h-10 bg-gray rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray rounded-full w-48 mb-2.5"></div>
      <div className="h-2 bg-gray rounded-full w-48 mb-2.5"></div>
      <div className="h-2 bg-gray rounded-full w-48 mb-2.5"></div>
    </div>
  );
};

export const DataSkeletonLoading = ({children}: any) => {
  return (
    <>
      <div className="h-2 bg-gray rounded-full max-w-[440px] mb-2.5">{children}</div>
    </>
  );
};
