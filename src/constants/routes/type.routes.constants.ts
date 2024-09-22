export type TRouteStatic = {
    name: string;
    path: string;
    isNeedAuthentication: boolean;
    element: React.ReactNode;
    img?: React.ReactNode
  };
  
  export type TRouteDymanic = Omit<TRouteStatic, 'name'>;
  