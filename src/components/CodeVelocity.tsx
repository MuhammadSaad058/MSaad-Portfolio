import { useState } from "react";
import { Code2, Terminal, Copy, Check, Zap, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CodeVelocity = () => {
  const [activeTab, setActiveTab] = useState<"reanimated" | "agora" | "supabase" | "aiWriter">("reanimated");
  const [copied, setCopied] = useState(false);

  const snippets = {
    reanimated: {
      title: "React Native Reanimated 3",
      tagline: "60fps Gesture Physics on Native UI Thread",
      language: "typescript",
      badge: "60 FPS Native",
      code: `// High-velocity gesture interaction without JS Bridge lag
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  interpolate 
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export const SwipeCard = () => {
  const translationX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onChange((event) => {
      'worklet';
      translationX.value = event.translationX;
    })
    .onEnd(() => {
      'worklet';
      translationX.value = withSpring(0, { damping: 15, stiffness: 120 });
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translationX.value }],
    opacity: interpolate(translationX.value, [-200, 0, 200], [0.5, 1, 0.5]),
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.card, animatedStyle]} />
    </GestureDetector>
  );
};`,
    },
    agora: {
      title: "Flutter + Agora WebRTC SFU",
      tagline: "Ultra-Low Latency Group Voice & Video Streaming",
      language: "dart",
      badge: "Sub-150ms Latency",
      code: `// Talk2Learn Agora WebRTC Engine Setup with Riverpod
import 'package:agora_rtc_engine/agora_rtc_engine.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

final agoraEngineProvider = Provider<RtcEngine>((ref) {
  throw UnimplementedError();
});

class AgoraMeetingController extends StateNotifier<RoomState> {
  final RtcEngine _engine;
  
  AgoraMeetingController(this._engine) : super(RoomState.initial());

  Future<void> joinVoiceRoom({required String channelId, required String token}) async {
    await _engine.setClientRole(role: ClientRoleType.clientRoleBroadcaster);
    await _engine.enableAudio();
    await _engine.enableVideo();
    
    // Low-latency selective forwarding unit
    await _engine.joinChannel(
      token: token,
      channelId: channelId,
      uid: 0,
      options: const ChannelMediaOptions(
        clientRoleType: ClientRoleType.clientRoleBroadcaster,
        channelProfile: ChannelProfileType.channelProfileLiveBroadcasting,
      ),
    );
  }
}`,
    },
    supabase: {
      title: "Supabase Realtime Engine",
      tagline: "Sub-100ms Global Leaderboards & Multiplayer Sync",
      language: "typescript",
      badge: "Realtime WebSockets",
      code: `// Tap Wars Realtime Multiplayer Sync Engine
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const subscribeToRoom = (roomId: string, onScoreUpdate: (data: any) => void) => {
  const channel = supabase
    .channel(\`room:\${roomId}\`)
    .on('broadcast', { event: 'tap_event' }, (payload) => {
      onScoreUpdate(payload.payload);
    })
    .on('presence', { event: 'sync' }, () => {
      const state = channel.presenceState();
      console.log('Active players online:', Object.keys(state).length);
    })
    .subscribe(async (status) => {
      if (status === 'SUBSCRIBED') {
        await channel.track({ online_at: new Date().toISOString() });
      }
    });

  return () => {
    supabase.removeChannel(channel);
  };
};`,
    },
    aiWriter: {
      title: "Firebase Cloud Functions AI Writer",
      tagline: "Automated Diagnostic Service Reports & Invoicing",
      language: "typescript",
      badge: "Serverless AI Pipeline",
      code: `// ProperMech Pro AI Service Writer Cloud Function
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const generateServiceDiagnosis = functions.https.onCall(
  async (data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'User must sign in');
    }

    const { vehicleMake, mileage, symptoms, mechanicNotes } = data;

    // AI diagnostic inference & parts recommendation engine
    const diagnosis = await callAiEngine({
      prompt: \`Analyze automotive issue for \${vehicleMake} at \${mileage} miles: \${symptoms}. Notes: \${mechanicNotes}\`,
      temperature: 0.2,
    });

    const reportRef = await admin.firestore().collection('service_reports').add({
      mechanicId: context.auth.uid,
      diagnosis: diagnosis.summary,
      recommendedParts: diagnosis.parts,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { reportId: reportRef.id, diagnosis: diagnosis.summary };
  }
);`,
    },
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative bg-transparent border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 mb-4">
            Under The Hood
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            CODE ARCHITECTURE &amp; PERFORMANCE
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Strict TypeScript typing, worklet micro-animations, low-latency audio/video pipelines, and serverless cloud functions written for scale.
          </p>
        </div>

        {/* Code Terminal Mockup */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#090d16] border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>{currentSnippet.title}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md">
                {currentSnippet.badge}
              </span>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                title="Copy Code"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap border-b border-white/[0.06] bg-black/40 px-3 pt-2 gap-1">
            {[
              { id: "reanimated", label: "React Native 60fps" },
              { id: "agora", label: "Flutter + Agora SFU" },
              { id: "supabase", label: "Supabase Realtime" },
              { id: "aiWriter", label: "Firebase Cloud AI" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-t-xl text-xs font-semibold font-heading transition-all ${
                  activeTab === tab.id
                    ? "bg-[#090d16] text-cyan-400 border-t-2 border-cyan-400 border-x border-white/[0.06]"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.02]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Body */}
          <div className="p-5 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-300 leading-relaxed max-h-[380px] overflow-y-auto">
            <pre className="text-cyan-300/90 whitespace-pre font-mono">
              <code>{currentSnippet.code}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="px-6 py-3 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentSnippet.tagline}</span>
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              TypeScript / Dart Strict
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CodeVelocity;

