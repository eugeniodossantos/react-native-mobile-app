import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const cards = [
  { label: 'Projetos', value: '12' },
  { label: 'Tarefas', value: '34' },
  { label: 'Concluídas', value: '21' },
];

const activities = [
  'Dashboard atualizado',
  'Nova integração adicionada',
  'Interface mobile revista',
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>PORTFÓLIO MOBILE</Text>
            <Text style={styles.title}>Olá, Eugênio</Text>
            <Text style={styles.subtitle}>React Native + TypeScript</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>EF</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroLabel}>Visão geral</Text>
          <Text style={styles.heroValue}>68%</Text>
          <Text style={styles.heroText}>Progresso das atividades desta semana</Text>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Resumo</Text>
        <View style={styles.cardsRow}>
          {cards.map((card) => (
            <View key={card.label} style={styles.card}>
              <Text style={styles.cardValue}>{card.value}</Text>
              <Text style={styles.cardLabel}>{card.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Atividade recente</Text>
          <TouchableOpacity>
            <Text style={styles.link}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.activityList}>
          {activities.map((item, index) => (
            <View key={item} style={styles.activityItem}>
              <View style={styles.activityDot} />
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>{item}</Text>
                <Text style={styles.activityMeta}>Há {index + 1} hora(s)</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f6f8fb' },
  container: { padding: 20, gap: 18 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eyebrow: { fontSize: 12, fontWeight: '700', letterSpacing: 1.4, color: '#667085' },
  title: { fontSize: 28, fontWeight: '800', color: '#101828', marginTop: 4 },
  subtitle: { fontSize: 14, color: '#667085', marginTop: 2 },
  avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#111827', alignItems: 'center', justifyContent: 'center' },
  avatarText: { color: '#ffffff', fontWeight: '800' },
  hero: { backgroundColor: '#111827', borderRadius: 22, padding: 22 },
  heroLabel: { color: '#cbd5e1', fontSize: 14 },
  heroValue: { color: '#ffffff', fontSize: 42, fontWeight: '800', marginTop: 6 },
  heroText: { color: '#d1d5db', marginTop: 2, marginBottom: 16 },
  progressTrack: { height: 8, borderRadius: 99, backgroundColor: '#374151', overflow: 'hidden' },
  progressFill: { width: '68%', height: '100%', backgroundColor: '#ffffff' },
  sectionTitle: { fontSize: 18, fontWeight: '800', color: '#101828' },
  cardsRow: { flexDirection: 'row', gap: 10 },
  card: { flex: 1, backgroundColor: '#ffffff', paddingVertical: 18, paddingHorizontal: 12, borderRadius: 18 },
  cardValue: { fontSize: 24, fontWeight: '800', color: '#101828' },
  cardLabel: { fontSize: 12, color: '#667085', marginTop: 4 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  link: { fontSize: 13, fontWeight: '700', color: '#475467' },
  activityList: { backgroundColor: '#ffffff', borderRadius: 18, paddingHorizontal: 16 },
  activityItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e4e7ec' },
  activityDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#111827', marginRight: 12 },
  activityContent: { flex: 1 },
  activityTitle: { fontSize: 14, fontWeight: '700', color: '#101828' },
  activityMeta: { fontSize: 12, color: '#98a2b3', marginTop: 3 },
});
