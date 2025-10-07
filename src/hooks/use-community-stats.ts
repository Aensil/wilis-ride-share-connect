import { useEffect, useState } from "react";

import type { CommunityStat } from "@/content/stats";
import { communityStats as fallbackStats, statsFootnote as fallbackFootnote } from "@/content/stats";

interface UseCommunityStatsResult {
  stats: CommunityStat[];
  footnote: string;
  loading: boolean;
  error: string | null;
}

export const useCommunityStats = (): UseCommunityStatsResult => {
  const [stats, setStats] = useState<CommunityStat[]>(fallbackStats);
  const [footnote, setFootnote] = useState<string>(fallbackFootnote);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/community-stats.json", { cache: "no-store" });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        if (!active) return;
        setStats(Array.isArray(data.stats) ? data.stats : fallbackStats);
        setFootnote(typeof data.footnote === "string" ? data.footnote : fallbackFootnote);
        setError(null);
      } catch (err) {
        if (active) {
          setError("No se pudieron cargar las estadísticas actualizadas.");
          setStats(fallbackStats);
          setFootnote(fallbackFootnote);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      active = false;
    };
  }, []);

  return { stats, footnote, loading, error };
};
