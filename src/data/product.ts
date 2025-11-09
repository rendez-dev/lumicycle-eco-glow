import type { ProductImage } from "@/components/ProductGallery";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: ProductImage[];
  features: string[];
  specifications: {
    material: string;
    dimensions: string;
    weight: string;
    capacity?: string;
    technology?: string;
  };
  story: string;
}

// Single featured product with multiple angles
export const featuredProduct: Product = {
  id: "ecoglow-bottle-001",
  name: "EcoGlow Bottle",
  description: "Botol minum LED daur ulang dengan teknologi self-cleaning UV. Inovasi terbaru dalam gaya hidup berkelanjutan yang menggabungkan fungsi, teknologi, dan estetika futuristik.",
  price: 299000,
  category: "Bottles",
  images: [
    {
      id: "img-1",
      url: "https://asset.kompas.com/crops/MdEZZcFYItIBmM808EQXOrL6_L0=/0x0:4664x3109/1200x800/data/photo/2025/03/04/67c6a70245c01.jpg",
      angle: "Front View",
      altText: "EcoGlow Bottle tampak depan",
      isPrimary: true,
    },
    {
      id: "img-2",
      url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80",
      angle: "Side Profile",
      altText: "EcoGlow Bottle tampak samping",
    },
    {
      id: "img-3",
      url: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80",
      angle: "Top View",
      altText: "EcoGlow Bottle tampak atas",
    },
    {
      id: "img-4",
      url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
      angle: "LED Detail",
      altText: "Detail LED dan teknologi UV",
    },
    {
      id: "img-5",
      url: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&q=80",
      angle: "In Use",
      altText: "EcoGlow Bottle sedang digunakan",
    },
    {
      id: "img-6",
      url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80&fit=crop",
      angle: "Material Close-up",
      altText: "Close-up material daur ulang berkualitas tinggi",
    },
    {
      id: "img-7",
      url: "https://images.unsplash.com/photo-1509315811345-672d83ef2fbc?w=800&q=80",
      angle: "Size Comparison",
      altText: "Perbandingan ukuran dengan objek sehari-hari",
    },
    {
      id: "img-8",
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      angle: "Lifestyle Shot",
      altText: "EcoGlow Bottle dalam konteks lifestyle modern",
    },
  ],
  features: [
    "💧 Teknologi Self-Cleaning UV yang membunuh 99.9% bakteri",
    "💡 LED indicator untuk status kebersihan air",
    "♻️ 100% terbuat dari plastik daur ulang berkualitas tinggi",
    "🔋 Rechargeable battery dengan daya tahan hingga 2 bulan",
    "🌡️ Double-wall insulation untuk menjaga suhu minuman",
    "🌟 Desain futuristik dengan glow-in-the-dark accent",
    "💪 BPA-Free dan food-grade certified",
    "🎨 Tersedia dalam berbagai pilihan warna neon",
  ],
  specifications: {
    material: "100% Recycled PET Plastic + Stainless Steel",
    dimensions: "24cm (H) x 7.5cm (D)",
    weight: "280 grams",
    capacity: "500ml",
    technology: "UV-C LED Self-Cleaning System",
  },
  story: `
    EcoGlow Bottle lahir dari visi untuk mengubah sampah plastik menjadi produk yang tidak hanya fungsional, 
    tetapi juga indah dan berteknologi tinggi. Setiap botol dibuat dari plastik daur ulang yang dikumpulkan 
    dari program recycling kami di berbagai kota di Indonesia.
    
    Teknologi UV-C LED yang tertanam dalam tutup botol bekerja otomatis setiap 2 jam untuk membersihkan air 
    dan bagian dalam botol, menjamin air minum Anda selalu segar dan steril. LED indicator berwarna-warni 
    tidak hanya cantik dipandang, tetapi juga menunjukkan status kebersihan dan level baterai.
    
    Dengan EcoGlow Bottle, Anda tidak hanya berkontribusi pada pengurangan sampah plastik sekali pakai, 
    tetapi juga membawa statement fashion yang bold dan futuristik. Be Luminous with Recycle! ✨
  `,
};
