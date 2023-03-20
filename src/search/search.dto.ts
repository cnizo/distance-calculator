export class SearchDto {
  sourceAddress: string;
  destinationAddress: string;
  distance?: number;
}

export class CreateSearchRequestDto {
  sourceAddress: string;
  destinationAddress: string;
}

export class CreateSearchResponseDto {
    distance?: number;
}