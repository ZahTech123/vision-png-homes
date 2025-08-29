import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function LevelDisplay() {
  const { levelId } = useParams();

  const levelImages: { [key: string]: string[] } = {
    L8S4: [
      "/src/assets/Level/L8S4/IMG-20250814-WA0063.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0064.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0065.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0066.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0067.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0068.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0069.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0070.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0071.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0072.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0073.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0074.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0075.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0076.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0077.jpg",
      "/src/assets/Level/L8S4/IMG-20250814-WA0078.jpg",
    ],
    L8S2: [
      "/src/assets/Level/L8S2/IMG-20250814-WA0079.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0080.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0081.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0082.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0083.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0084.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0085.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0086.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0087.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0088.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0089.jpg",
      "/src/assets/Level/L8S2/IMG-20250814-WA0090.jpg",
    ],
    L8S1: [
      "/src/assets/Level/L8S1/IMG-20250814-WA0091.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0092.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0093.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0094.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0095.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0096.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0097.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0098.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0099.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0100.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0101.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0102.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0103.jpg",
      "/src/assets/Level/L8S1/IMG-20250814-WA0104.jpg",
    ],
    L7S2: [
      "/src/assets/Level/L7S2/L7S2-Desk 1-Side.jpg",
      "/src/assets/Level/L7S2/L7S2-Desk 1.jpg",
      "/src/assets/Level/L7S2/L7S2-Office Entry.jpg",
      "/src/assets/Level/L7S2/L7S2-Office Foyer.jpg",
    ],
    L7S1: [
      "/src/assets/Level/L7S1/IMG-20250804-WA0021.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0023.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0024.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0025.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0026.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0027.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0028.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0029.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0030.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0031.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0032.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0033.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0034.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0035.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0036.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0037.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0038.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0039.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0040.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0041.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0042.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0043.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0044.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0045.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0046.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0047.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0048.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0049.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0050.jpg",
      "/src/assets/Level/L7S1/IMG-20250804-WA0051.jpg",
    ],
    L1S1: [
      "/src/assets/Level/L1S1/IMG-20250804-WA0010.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0011.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0012.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0013.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0014.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0015.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0016.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0017.jpg",
      "/src/assets/Level/L1S1/IMG-20250804-WA0018.jpg",
      "/src/assets/Level/L1S1/L1S1-facing front ANG Haus.jpg",
    ],
  };

  const images = levelImages[levelId || ''] || [];
  let levelName = 'Unknown Level';
  if (levelId === 'L7S2') {
    levelName = 'Level 7, Suite 2';
  } else if (levelId === 'L7S1') {
    levelName = 'Level 7, Suite 1';
  } else if (levelId === 'L8S4') {
    levelName = 'Level 8, Suite 4';
  } else if (levelId === 'L8S2') {
    levelName = 'Level 8, Suite 2';
  } else if (levelId === 'L8S1') {
    levelName = 'Level 8, Suite 1';
  } else if (levelId === 'L1S1') {
    levelName = 'Level 1, Suite 1';
  } else if (levelId) {
    levelName = levelId.replace('L8S', 'Level 8, Suite ');
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 p-6">
      <div className="absolute top-4 right-4">
        <Button>
          <Link to="/level-selection">Back to Level Selection</Link>
        </Button>
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          {levelName}
        </h1>
        {(levelId === 'L8S4' || levelId === 'L8S2' || levelId === 'L8S1') && (
          <p className="text-lg text-muted-foreground mt-2">K6,666 monthly (80m2)</p>
        )}
        {levelId === 'L7S2' && (
          <p className="text-lg text-muted-foreground mt-2">K6,666 per month (80m2)</p>
        )}
        {levelId === 'L7S1' && (
          <p className="text-lg text-muted-foreground mt-2">K6,666 per month (80m2)</p>
        )}
        {levelId === 'L1S1' && (
          <p className="text-lg text-muted-foreground mt-2">K21,666 per month (260m2)</p>
        )}
      </div>
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`${levelName} Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" />
          ))}
        </div>
      ) : (
        <p className="text-lg text-muted-foreground">No images available for this level yet.</p>
      )}
    </div>
  );
}
