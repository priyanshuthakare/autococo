// GlassCard removed

export function LiveRenderPanel() {
 return (
 <div className="h-full w-full bg-white rounded-lg overflow-hidden relative">
 <div className="absolute inset-0 flex items-center justify-center text-black">
 <div className="text-center">
 <p className="font-bold">Live Preview</p>
 <p className="text-sm text-gray-500">Waiting for build...</p>
 </div>
 </div>
 {/* Iframe would go here */}
 </div>
 );
}
