import { Recycle, Users, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-glow bg-clip-text text-transparent">
              About LUMICYCLE
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Menggabungkan keindahan cahaya dengan keberlanjutan lingkungan
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="gradient-card rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-glow flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LUMICYCLE lahir dari keyakinan bahwa produk ramah lingkungan tidak harus membosankan. 
              Kami menggabungkan inovasi desain modern dengan bahan daur ulang berkualitas tinggi untuk 
              menciptakan produk yang tidak hanya baik untuk planet ini, tetapi juga indah dipandang dan 
              menyenangkan digunakan.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Setiap produk LUMICYCLE dirancang dengan filosofi "Be Luminous with Recycle" – 
              bersinar terang sambil berkontribusi pada masa depan yang berkelanjutan.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="text-center space-y-4 p-8 rounded-xl gradient-card border border-border">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-glow flex items-center justify-center animate-float">
              <Recycle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Sustainability First</h3>
            <p className="text-muted-foreground">
              Berasal bahan daur ulang dan proses produksi yang ramah lingkungan
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-xl gradient-card border border-border">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-glow flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
              <Sparkles className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Innovative Design</h3>
            <p className="text-muted-foreground">
              Desain futuristik yang menggabungkan estetika dengan fungsi
            </p>
          </div>

          <div className="text-center space-y-4 p-8 rounded-xl gradient-card border border-border">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-glow flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
              <Users className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">Community Driven</h3>
            <p className="text-muted-foreground">
              Membangun komunitas yang peduli lingkungan dan masa depan bumi
            </p>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Proses Daur Ulang Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="gradient-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Pengumpulan Bahan</h3>
                  <p className="text-sm text-muted-foreground">
                    Kami mengumpulkan plastik dan material bekas dari berbagai sumber yang telah tersertifikasi
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Pemrosesan & Cleaning</h3>
                  <p className="text-sm text-muted-foreground">
                    Material dibersihkan dan diproses menggunakan teknologi ramah lingkungan
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Design & Manufacturing</h3>
                  <p className="text-sm text-muted-foreground">
                  Kami menciptakan produk unik dengan teknologi LED dan smart features
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-card rounded-xl p-6 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quality Control</h3>
                  <p className="text-sm text-muted-foreground">
                    Setiap produk melalui kontrol kualitas ketat sebelum sampai ke tangan Anda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
