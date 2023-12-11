export interface Property {
    _id: string;
    name: string;
    address?: string;
    phone?: string
};

export interface PropertyApiDataSuccess {
    properties?: Property[];
    property?: Property
}

export interface PropertyApiData {
    error?: { message: string };
    success?: PropertyApiDataSuccess;
};
  
  