interface Property {
    name: string;
    address?: string;
    phone?: string
};

interface PropertyApiDataSuccess {
    properties?: Property[];
    property?: Property
}

export interface PropertyApiData {
    error?: { message: string };
    success?: PropertyApiDataSuccess;
};
  
  