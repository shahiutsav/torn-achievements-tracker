interface Medal {
  id: number;
  name: string;
  description: string;
  type: string;
}

interface MedalCollection {
  [id: string]: Medal;
}

interface MedalsObject {
  medals: MedalCollection;
}
