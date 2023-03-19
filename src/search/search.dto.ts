export class SearchDto {
    sourceAddress: string;
    destinationAddress: string;
    distance?: number;
}

export class CreateSearchDto {
    distance?: number;
}